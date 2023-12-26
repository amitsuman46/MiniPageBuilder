import React, { useRef } from "react";

const Button = (props) => {
  const ref = useRef();

  const dragFn = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  };

  const onClickHandler = () => {
    ref.current.focus();
    console.log("Focused!");
  };

  const onKeyPress = (e) => {
    if (e.key === "Delete" || e.key === "Backspace") {
      props.onDelete(Number(e.target.id));
    }

    if (e.key === "Enter") {
      props.onSetCord({ X: props.X, Y: props.Y });
      console.log(e.target);
      props.setId(e.target.id);
      props.openModal();
    }
  };

  return (
    <div
      onKeyDown={onKeyPress}
      tabIndex={"0"}
      ref={ref}
      onClick={onClickHandler}
      id={props.id}
      draggable="true"
      onDragStart={(e) => dragFn(e)}
      style={{
        top: `${props.Y}px`,
        left: `${props.X}px`,
        fontWeight: `${props.fontWeight}`,
        fontSize: `${props.fontSize}px`,
      }}
      class={`absolute w-fit hover:bg-slate-400 px-1 hover:cursor-move focus:border-2 focus:border-red-600`}
    >
      <button class="bg-blue-700 opacity-100 p-2 m-2 text-white rounded-lg hover:bg-blue-400 lg:h-[40px] lg:w-[140px] sm:w-[60%] sm:h-[10%] sm:self-center lg:self-start">
        {props.btnName || "Button"}
      </button>
    </div>
  );
};

export default Button;
