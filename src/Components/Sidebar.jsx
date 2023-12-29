import React from "react";

const Sidebar = () => {
  const dragFn = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  };
  return (
    <div class="h-[100vh] xsm:w-[25%] sm:w-1/4 lg:text-2xl sm:text-xl lg:w-1/5 bg-gray-800 flex flex-col items-center">
      <h1 class="mx-5 my-2 font-bold lg:text-2xl sm:text-xl text-white self-start">
        BLOCKS
      </h1>
      <div
        id="labelId"
        class="lg:w-1/2 xsm:text-xs xsm:w-[70%] sm:w-[70%] sm:text-lg lg:text-2xl bg-white rounded-md py-4 text-center my-4 cursor-pointer"
        draggable="true"
        onDragStart={(e) => dragFn(e)}
      >
        Label
      </div>
      <div
        id="inputId"
        class="lg:w-1/2 xsm:text-xs xsm:w-[70%] sm:w-[70%] sm:text-lg lg:text-2xl bg-white rounded-md py-4 text-center my-4 cursor-pointer"
        draggable="true"
        onDragStart={(e) => dragFn(e)}
      >
        Input
      </div>
      <div
        id="buttonId"
        class="lg:w-1/2 xsm:text-xs xsm:w-[70%] sm:w-[70%] sm:text-lg lg:text-2xl bg-white rounded-md py-4 text-center my-4 cursor-pointer"
        draggable="true"
        onDragStart={(e) => dragFn(e)}
      >
        Button
      </div>
    </div>
  );
};

export default Sidebar;
