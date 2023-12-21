import React from "react";

const Sidebar = () => {
  const dragFn = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    console.log("dragged!!");
  };
  return (
    <div class="h-screen sm:w-1/3 lg:w-1/5 lg:bg-purple-500 bg-cyan-700 flex flex-col items-center">
      <h1 class="mx-5 my-2 font-bold text-2xl text-white self-start">BLOCKS</h1>
      <div
        id="labelId"
        class="w-1/2 bg-gray-400 rounded-md px-4 py-4 text-center my-4 cursor-pointer"
        draggable="true"
        onDragStart={(e) => dragFn(e)}
      >
        Label
      </div>
      <div
        id="inputId"
        class="w-1/2 bg-gray-400 rounded-md px-4 py-4 text-center my-4 cursor-pointer"
        draggable="true"
        onDragStart={(e) => dragFn(e)}
      >
        Input
      </div>
      <div
        id="buttonId"
        class="w-1/2 bg-gray-400 rounded-md px-4 py-4 text-center my-4 cursor-pointer"
        draggable="true"
        onDragStart={(e) => dragFn(e)}
      >
        Button
      </div>
      <div class='h-24 bg-slate-50 w-full' onDrop={(e)=>{console.log('dropped!')}} onDragOver={(e)=>e.preventDefault()}>
        DROP HERE
        </div>
    </div>
    
  );
};

export default Sidebar;
