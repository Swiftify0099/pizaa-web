import React, { useRef, useState, useCallback } from "react";
import { showSuccess, showWarning } from "../../services/toastService.jsx";
import axios from "axios";
import Cropper from "react-easy-crop";
import imageCompression from "browser-image-compression";

const categories = [ "shampoo", "sports", "bike", "electronics", "kids", "other" ];

const Uploader = () => {
    const [ file, setFile ] = useState(null);
    const [ preview, setPreview ] = useState(null);
    const [ fileType, setFileType ] = useState(null);
    const [ category, setCategory ] = useState(categories[ 0 ]);
    const [ crop, setCrop ] = useState({ x: 0, y: 0 });
    const [ zoom, setZoom ] = useState(1);
    const [ croppedAreaPixels, setCroppedAreaPixels ] = useState(null);
    const [ cropModalOpen, setCropModalOpen ] = useState(false);
    const dropRef = useRef(null);

    const MAX_VIDEO_SIZE = 10 * 1024 * 1024; // 10MB

    const validateFile = (selectedFile, type) => {
        if (type === "image" && !selectedFile.type.startsWith("image/")) {
            showWarning("Please select a valid image.");
            return false;
        }
        if (type === "video") {
            if (!selectedFile.type.startsWith("video/")) {
                showWarning("Please select a valid video.");
                return false;
            }
            if (selectedFile.size > MAX_VIDEO_SIZE) {
                showWarning("Video must be smaller than 10MB.");
                return false;
            }
        }
        return true;
    };

    const createImage = (url) =>
        new Promise((resolve, reject) => {
            const image = new Image();
            image.addEventListener("load", () => resolve(image));
            image.addEventListener("error", (error) => reject(error));
            image.setAttribute("crossOrigin", "anonymous");
            image.src = url;
        });

    const getCroppedImg = async (imageSrc, cropPixels) => {
        const image = await createImage(imageSrc);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = cropPixels.width;
        canvas.height = cropPixels.height;

        ctx.drawImage(
            image,
            cropPixels.x,
            cropPixels.y,
            cropPixels.width,
            cropPixels.height,
            0,
            0,
            cropPixels.width,
            cropPixels.height
        );

        return new Promise((resolve) => {
            canvas.toBlob((blob) => {
                resolve(new File([ blob ], `file.name`, { type: "image/jpeg" }));
            }, "image/jpeg");
        });
    };

    const processImage = async (selectedFile) => {
        setCropModalOpen(true);
        setPreview(URL.createObjectURL(selectedFile));
        setFileType("image");
    };

    const handleCropComplete = useCallback((_, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const applyCrop = async () => {
        const croppedImage = await getCroppedImg(preview, croppedAreaPixels);
        const options = { maxSizeMB: 1, maxWidthOrHeight: 1024, useWebWorker: true };
        const compressedFile = await imageCompression(croppedImage, options);

        setFile(compressedFile);
        setPreview(URL.createObjectURL(compressedFile));
        setCropModalOpen(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        dropRef.current.classList.remove("border-blue-500");
        const selectedFile = e.dataTransfer.files[ 0 ];
        if (!selectedFile) return;

        const type = selectedFile.type.startsWith("image/") ? "image" : "video";
        if (!validateFile(selectedFile, type)) return;

        if (type === "image") processImage(selectedFile);
        else {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
            setFileType("video");
        }
    };

    const handleFileChange = (e, type) => {
        const selectedFile = e.target.files[ 0 ];
        if (!selectedFile) return;
        if (!validateFile(selectedFile, type)) return;

        if (type === "image") processImage(selectedFile);
        else {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
            setFileType("video");
        }
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append(`file`, file);
        console.log(file.name)

        try {
            const res = await axios.post(
                `http://localhost:5615/upload/${ category }`,
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            console.log(res.data);
        } catch (err) {
            console.error("Upload failed:", err);
        }
    };
    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg space-y-10 w-full max-w-lg mx-auto mt-20">
            <h2 className="text-2xl font-semibold text-gray-800">Upload Media</h2>

            {/* Category Selector */ }
            <select
                value={ category }
                onChange={ (e) => setCategory(e.target.value) }
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            >
                { categories.map((cat) => (
                    <option key={ cat } value={ cat }>
                        { cat }
                    </option>
                )) }
            </select>

            {/* File Upload Buttons */ }
            <div className="flex gap-4">
                <label className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow cursor-pointer hover:bg-blue-700 transition">
                    Upload Image
                    <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={ (e) => handleFileChange(e, "image") }
                    />
                </label>

                <label className="bg-green-600 text-white px-4 py-2 rounded-lg shadow cursor-pointer hover:bg-green-700 transition">
                    Upload Video
                    <input
                        type="file"
                        accept="video/*"
                        hidden
                        onChange={ (e) => handleFileChange(e, "video") }
                    />
                </label>
            </div>

            {/* Drag and Drop Area */ }
            <div
                ref={ dropRef }
                onDrop={ handleDrop }
                onDragOver={ (e) => {
                    e.preventDefault();
                    dropRef.current.classList.add("border-blue-500", "bg-blue-50");
                } }
                onDragLeave={ () => dropRef.current.classList.remove("border-blue-500", "bg-blue-50") }
                className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 hover:border-blue-400 hover:bg-blue-50 transition"
            >
                Drag & Drop Image or Video Here
            </div>

            {/* Preview */ }
            { preview && !cropModalOpen && (
                <div className="w-full mt-4">
                    { fileType === "image" ? (
                        <img src={ preview } alt="Preview" className="rounded-lg w-40 object-cover shadow" />
                    ) : (
                        <video src={ preview } controls className="rounded-lg w-full object-cover shadow" />
                    ) }
                </div>
            ) }

            {/* Crop Modal */ }
            { cropModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50 p-4">
                    <div className="relative w-full max-w-2xl h-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
                        <Cropper
                            image={ preview }
                            crop={ crop }
                            zoom={ zoom }
                            aspect={ 1 }
                            onCropChange={ setCrop }
                            onZoomChange={ setZoom }
                            onCropComplete={ handleCropComplete }
                        />
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
                            <button
                                onClick={ applyCrop }
                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                            >
                                Apply Crop
                            </button>
                            <button
                                onClick={ () => setCropModalOpen(false) }
                                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            ) }

            {/* Upload Button */ }
            <button
                onClick={ handleUpload }
                className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow hover:bg-purple-700 transition"
            >
                Upload
            </button>
        </div>
    );
};

export default Uploader;
