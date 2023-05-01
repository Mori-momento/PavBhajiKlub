import React from 'react';

const Card = ({ image, dish_name, description, price = 420 }) => {
  return (
    <div className="relative bg-gray-500 rounded-md shadow-md overflow-hidden w-72 h-96">
      <div className="relative h-full w-full overflow-hidden">
        <img
          className="absolute h-full w-full object-cover transform transition-all duration-500 hover:scale-110"
          src={image}
          alt={dish_name}
        />
      </div>
      <div className="absolute bg-gradient-to-t from-black from-0% to-transparent bottom-0 p-2 ">
        <h3 className="font-medium text-white">{dish_name}</h3>
        <p className="text-white mt-2">{description}</p>
        <div className="flex items-center justify-between">
          <p className="font-medium text-white rounded-md p-2">${price}</p>
          <button className="bg-orange-500 text-white font-medium mt-4 py-2 px-4 rounded-md hover:bg-orange-600">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
            