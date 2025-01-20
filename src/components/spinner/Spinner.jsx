import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-blue-300 border-t-transparent rounded-full animate-spin-reverse"></div>
      </div>
    </div>
  );
};

export default Spinner;
