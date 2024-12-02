import { React, useState } from "react";
const InnerComponent = ({ isVisible }) => {
  return (
    <div
      className={`bg-blue-500 p-4 rounded  transition-all duration-1000 flex flex-nowrap w-full ease-in transform ${
        isVisible ? "opacity-100 scale-1" : "opacity-30xx scale-95"
      }`}
    >
      <p className="text-gray-800">Hello, I am the dynamic component!</p>
    </div>
  );
};

const Navlist = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-4 bg-blue-500 rounded-lg m-3">
      <div
        className={`w-full bg-blue-500 flex flex-nowrap justify-around p-2 transition-all items-center duration-1000 ease-in-out  rounded-lg ${
          isExpanded ? "h-40 " : "h-32"
        }`}
      >
        <h1 className=" w-[50%]">
          Section {!isExpanded ? "Collapsed" : "Expanded"}
        </h1>
        <button
          className=" w-[50%] rounded-lg bg-red-400 p-2 ring-2 outline-none outline-red-800 ring-offset-2 "
          onClick={handleClick}
        >
          {isExpanded ? "Collapse" : "Expand"}
        </button>
      </div>
      <div
        className={`w-full  flex-nowrap bg-blue-500  transition-all duration-1000 ease-in-out overflow-hidden  ${
          isExpanded
            ? "max-h-screen opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95 "
        }`}
      >
        <InnerComponent isVisible={isExpanded} />
      </div>
    </div>
  );
};

export default Navlist;
