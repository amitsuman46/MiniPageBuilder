import React, { useEffect, useRef, useState } from "react";

const ModalCard = ({
  onClose,
  cord,
  onSave,
  title,
  textM,
  fontSize,
  fontWt,
}) => {
  const textRef = useRef();
  const xRef = useRef();
  const yRef = useRef();
  const fontSRef = useRef();
  const fontWRef = useRef();

  const onSaveHandler = () => {
    const text = textRef.current.value;
    const cordX = xRef.current.value;
    const cordY = yRef.current.value;
    const fontSize = fontSRef.current.value;
    const fontWeight = fontWRef.current.value;
    console.log(cordX, cordY, text, fontSize, fontWeight);
    onSave(cordX, cordY, text, fontSize, fontWeight);
  };

  console.log(title);
  return (
    <>
      <div class="bg-white sm:w-[250px] sm:h-[400px] lg:h-[85vh] lg:w-[40vw] flex flex-col justify-around rounded-md items-center mt-10">
        <div class="self-start flex justify-between mt-2 ml-2 mr-2 items-center h-[64px] w-[379px] sm:w-[90%] sm:h-[10%]">
          <h1 class="lg:text-2xl font-bold justify-self-start ml-2 sm:text-lg">
            Edit {title}
          </h1>
          <button
            class="justify-self-end lg:text-2xl mb-2 mr-2"
            onClick={() => onClose()}
          >
            x
          </button>
        </div>
        <hr class="w-[95%]" />
        <div class="flex flex-col my-2 mx-2  h-[64px] w-[379px] sm:w-[90%] sm:h-[10%]">
          <label
            htmlFor="text"
            class="self-start lg:text-lg font-semibold sm:text-xs"
          >
            Text
          </label>
          <input
            defaultValue={textM}
            ref={textRef}
            type="text"
            id="text"
            class="p-1 border-2 rounded-md ml-1 mr-1 w-full sm:h-[80%]"
            placeholder="This is a placeholder"
          />
        </div>
        <div class="flex flex-col my-2 mx-2  h-[64px] w-[379px] sm:w-[90%] sm:h-[10%]">
          <label
            htmlFor="corX"
            class="self-start lg:text-lg font-semibold sm:text-xs"
          >
            X
          </label>
          <input
            ref={xRef}
            defaultValue={cord.X}
            type="text"
            id="corX"
            class="p-1 border-2 rounded-md ml-1 mr-1 w-full sm:h-[80%]"
          />
        </div>
        <div class="flex flex-col my-2 mx-2   h-[64px] w-[379px] sm:w-[90%] sm:h-[10%]">
          <label
            htmlFor="corY"
            class="self-start lg:text-lg font-semibold sm:text-xs"
          >
            Y
          </label>
          <input
            ref={yRef}
            defaultValue={cord.Y}
            type="text"
            id="corY"
            class="p-1 border-2 rounded-md ml-1 mr-1 w-full sm:h-[80%]"
          />
        </div>
        <div class="flex flex-col my-2 mx-2  h-[64px] w-[379px] sm:w-[90%] sm:h-[10%]">
          <label
            htmlFor="fontSize"
            class="self-start lg:text-lg font-semibold sm:text-xs"
          >
            Font Size
          </label>
          <input
            ref={fontSRef}
            defaultValue={fontSize}
            type="text"
            id="fontSize"
            class="p-1 border-2 rounded-md ml-1 mr-1 w-full sm:h-[80%]"
          />
        </div>
        <div class="flex flex-col my-2 mx-2   h-[64px] w-[379px] sm:w-[90%] sm:h-[10%]">
          <label
            htmlFor="fontWeight"
            class="self-start lg:text-lg font-semibold sm:text-xs"
          >
            Font Weight
          </label>
          <input
            ref={fontWRef}
            defaultValue={fontWt}
            type="text"
            id="fontWeight"
            class="p-1 border-2 rounded-md ml-1 mr-1 w-full sm:h-[80%]"
          />
        </div>
        <button
          class="bg-blue-700 opacity-100 p-2 m-2 text-white rounded-lg hover:bg-blue-400 lg:h-[40px] lg:w-[140px] sm:w-[60%] sm:h-[10%] sm:self-center lg:self-start"
          onClick={onSaveHandler}
        >
          {" "}
          Save Changes
        </button>
      </div>
    </>
  );
};

export default ModalCard;
