import React, { useRef, useState } from "react";

const Input = (props) => {
  const ref = useRef();
  const [inputVal, setInput] = useState(null);

  const dragFn = (e) => {
    e.dataTransfer.setData("text/plain", props.id);
  };

  const onClickHandler = (e) => {
    ref.current.focus();
    console.log("Focused!");
  };

  const onKeyPress = (e) => {
    if (e.key === "Delete") {
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
      draggable="true"
      onDragStart={(e) => dragFn(e)}
      style={{
        top: `${props.Y}px`,
        left: `${props.X}px`,
        fontWeight: `${props.fontWeight}`,
        fontSize: `${props.fontSize}px`,
      }}
      class={`absolute w-fit hover:bg-slate-400 hover:cursor-move focus:border-2 focus:border-red-600 px-1`}
    >
      <input
        class="py-1 px-1"
        id={props.id}
        onClick={(e) => {
          e.stopPropagation();
        }}
        type="text"
        defaultValue={props.text}
      />
    </div>
  );
};

export default Input;
