import React from "react";

const Card = ({ image, title, description, price, buttonText, onButtonClick }) => {
  return (
    <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden">
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-serif font-bold text-amber-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-700 mb-6">{description}</p>

        {/* Price & Button (Optional) */}
        {(price || buttonText) && (
          <div className="flex justify-between items-center">
            {price && <span className="text-red-600 font-bold text-xl">{price}</span>}
            {buttonText && (
              <button
                onClick={onButtonClick}
                className="bg-gradient-to-r from-amber-500 to-red-500 text-white px-5 py-2 rounded-full shadow hover:from-amber-600 hover:to-red-600 transition-all duration-300"
              >
                {buttonText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
