// src/utils/toastService.js
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Success Toast
export const showSuccess = (message) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};

// Error Toast
export const showError = (message) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};

// Info Toast
export const showInfo = (message) => {
    toast.info(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};

// Warning Toast
export const showWarning = (message) => {
    toast.warn(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};

// Dark Toast
export const showDark = (message) => {
    toast(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

};

{/* <div className="p-5">
        <button onClick={ () => showSuccess("Success! 🎉") } className="bg-green-500 text-white px-4 py-2 rounded">
          Show Success
        </button>
        <button onClick={ () => showError("Something went wrong ❌") } className="bg-red-500 text-white px-4 py-2 rounded ml-2">
          Show Error
        </button>
        <button onClick={ () => showInfo("Some info for you ℹ️") } className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
          Show Info
        </button>
        <button onClick={ () => showWarning("Be careful! ⚠️") } className="bg-yellow-500 text-white px-4 py-2 rounded ml-2">
          Show Warning
        </button>
        <button onClick={ () => showDark("Dark mode toast 🌙") } className="bg-gray-800 text-white px-4 py-2 rounded ml-2">
          Show Dark
        </button>
      </div> */}
