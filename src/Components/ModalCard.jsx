import React from "react";

const ModalCard = ({onClose}) => {
  return <>
    <div class='bg-white sm:w-1/3 sm:h-1/2 lg:h-[700px] lg:w-1/3 '>
        <div class='flex justify-between mt-4 ml-2 mr-2 items-center'> 
        <h1 class='text-2xl font-bold justify-self-start'> Edit Label</h1>
        <button class='justify-self-end text-2xl' onClick={()=>onClose()}>X</button>
        </div>
        <hr/>
        <div class='flex flex-col my-2 mx-2 items-center  '>
            <label htmlFor="text" class='self-start text-l font-bold'>Text</label>
            <input type="text" id='text' class='p-1 border-2 rounded-md ml-1 mr-1 w-full' placeholder="This is a label"/>
        </div>
        <div class='flex flex-col my-2 mx-2 items-center '>
            <label htmlFor="corX" class='self-start text-l font-bold'>X</label>
            <input type="text" id='corX' class='p-1 border-2 rounded-md ml-1 mr-1 w-full' />
        </div>
        <div class='flex flex-col my-2 mx-2 items-center  '>
            <label htmlFor="corY" class='self-start text-l font-bold'>Y</label>
            <input type="text" id='corY' class='p-1 border-2 rounded-md ml-1 mr-1 w-full' />
        </div>
        <div class='flex flex-col my-2 mx-2 items-center '>
            <label htmlFor="fontSize" class='self-start text-l font-bold'>Font Size</label>
            <input type="text" id='fontSize' class='p-1 border-2 rounded-md ml-1 mr-1 w-full' />
        </div>
        <div class='flex flex-col my-2 mx-2 items-center  '>
            <label htmlFor="fontWeight" class='self-start text-l font-bold'>Font Weight</label>
            <input type="text" id='fontWeight' class='p-1 border-2 rounded-md ml-1 mr-1 w-full' />
        </div>
    <button class='bg-blue-700 opacity-100 p-2 m-2 text-white rounded-lg hover:bg-blue-400'> Save Changes</button>
    </div>
  </>;
};

export default ModalCard;
