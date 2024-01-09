import React, { useContext, useRef } from "react";
import { FaTrash } from "react-icons/fa";
import { AppContext } from "../../context/AppContext";
const Label = (props) => {
  const ref = useRef();
  const context = useContext(AppContext);

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
      context.setId(e.target.id);
      props.openModal();
    }
  };

  const onDbClick = () => {
    if (e.key === "Delete" || e.key === "Backspace") {
      props.onDelete(Number(e.target.id));
    }

    if (e.key === "Enter") {
      props.onSetCord({ X: props.X, Y: props.Y });
      context.setId(e.target.id);
      props.openModal();
    }
  };
  const testHandler = (id) => {
    console.log("delete icon triggered");
    props.onDelete(Number(id));
  };
  console.log(props.fontSize, props.fontWeight);

  return (
    <div
      onDoubleClick={onDbClick}
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
      <div className="w-fit h-fit flex">
        <span style={{}}>{props.label}</span>
        {window.innerWidth < 420 && window.innerWidth > 200 && (
          <FaTrash
            onClick={(e) => {
              e.stopPropagation();
              testHandler(props.id);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Label;
