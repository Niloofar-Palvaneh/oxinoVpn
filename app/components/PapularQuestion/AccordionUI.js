import React from "react";
import { HiArrowCircleDown, HiX } from "react-icons/hi";

const AccordionUI = ({ title, children, Id, Index, setIndex }) => {
  const handleSetIndex = (Id) => {
    setIndex(false)
    Index !== Id && setIndex(Id)
  };

  return (
    <>
      <div
        onClick={() => handleSetIndex(Id)}
        className="flex group bg-gray-100 shadow cursor-pointer w-3/4 sm:w-full mx-auto  z-10
         h-16 sm:text-sm justify-between  items-center p-2 mt-2 rounded-md bg-white hover:bg-pink-500 hover:shadow-lg focus:bg-pink-500 "
      >
        <div className="flex group cursor-pointer">
          <div className="text-pink-600 sm:text-gray-600  pl-10 group-hover:text-white sm:p-0">
            {title}
          </div>
        </div>
        <div className="flex items-center justify-center pr-10">
          {Index !== Id ? (
            <HiArrowCircleDown className="w-6 h-6 group-hover:text-white text-pink-600 sm:w-4" />
          ) : (
            <HiX className="w-6 h-6 group-hover:text-white text-pink-600 sm:w-4" />
          )}
        </div>
      </div>

      {Index === Id && (
        <div className="bg-pink-100 sm:text-sm 
        sm:w-full sm:px-2 z-10
        pl-10 sm:p-0   text-pink-500 w-3/4 h-auto  rounded-md p-4 border-l-2 border-red-100 mb-2 ">
          {children}
        </div>
      )}
      
    </>
  );
};

export default AccordionUI;
