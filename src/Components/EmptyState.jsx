import React from 'react';
import noResult from '../assets/noResult.png';

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl mt-10 sm:mx-auto w-full ontainer mx-auto px-[3%] md:px-0">
      <div className="w-36 sm:w-48 h-auto mb-4">
        <img
          src={noResult}
          alt="No Results"
          className="w-full h-auto object-contain"
        />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 text-center">
        OPPS!! APP NOT FOUND
      </h2>

      <p className="text-gray-500 text-center mt-2 text-sm sm:text-base">
        The App you are requesting is not found on our system.  please try another apps
      </p>
    </div>
  );
};

export default EmptyState;