import React, { useContext, useEffect, useState } from "react";
import Label from "./Blocks/Label";
import Input from "./Blocks/Input";
import Button from "./Blocks/Button";
import { saveAs } from "file-saver";
import { AppContext } from "../context/AppContext";

const Page = (props) => {
  const context = useContext(AppContext);

  console.log("Hist : hist,index", context.history, context.indexHist);
  console.log("Blocks: ", context.blocks);

  const undoFn = () => {
    if (context.indexHist - 1 >= -1) {
      context.setBlocks(context.history[context.indexHist - 1]);
      localStorage.setItem(
        "pageConfig",
        JSON.stringify(context.history[context.indexHist - 1])
      );
      context.setIndex((prev) => prev - 1);
    }
  };

  const reDo = () => {
    if (context.indexHist + 1 < context.history.length) {
      context.setBlocks(context.history[context.indexHist + 1]);
      localStorage.setItem(
        "pageConfig",
        JSON.stringify(context.history[context.indexHist + 1])
      );
      context.setIndex((prev) => prev + 1);
    }
  };

  const onDrop = (e) => {
    let fromSidebar = true;
    const id = e.dataTransfer.getData("text/plain");
    switch (id) {
      case "labelId":
        context.setModalTitle("Label");
        break;
      case "inputId":
        context.setModalTitle("Input");
        break;
      case "buttonId":
        context.setModalTitle("Button");
        break;
      default:
        fromSidebar = false;
    }
    console.log("Dropped", id);

    if (fromSidebar) {
      props.onSetCord(
        {
          X: e.pageX,
          Y: e.pageY,
        },
        id
      );
      props.onModalOpen();
    } else {
      props.onSetCord(
        {
          X: e.pageX,
          Y: e.pageY,
        },
        id
      );

      const index = context.blocks.findIndex(
        (obj) => Number(obj.id) === Number(id)
      );
      const updatedObject = {
        text: context.blocks[index].text,
        X: e.pageX,
        Y: e.pageY,
        fontSize: context.blocks[index].fontSize,
        fontWeight: context.blocks[index].fontWeight,
        id: Number(id),
        type: context.blocks[index].type,
      };
      const newArray =
        index !== -1
          ? [
              ...context.blocks.slice(0, index),
              updatedObject,
              ...context.blocks.slice(index + 1),
            ]
          : [...context.blocks, updatedObject];

      localStorage.setItem("pageConfig", JSON.stringify(newArray));

      context.setBlocks(newArray);
    }
  };
  const onDragOver = (e) => {
    e.preventDefault();
    props.onSetCord({
      X: e.pageX,
      Y: e.pageY,
    });
  };
  const onExport = (e) => {
    const jsonString = localStorage.getItem("pageConfig");
    const blob = new Blob([jsonString], { type: "application/json" });
    saveAs(blob, "data.json");
  };
  return (
    <div
      class="bg-gray-300 w-4/5 relative"
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <div class="flex">
        <div
          onClick={onExport}
          class="w-fit bg-blue-400 font-bold text-white p-1 hover:bg-blue-600 cursor-pointer mr-1"
        >
          <span> Export Configuration </span>
        </div>
        <div class="w-fit bg-blue-400 font-bold text-white p-1 cursor-pointer">
          <span>{`X: ${context.cord.X || 0} , Y: ${context.cord.Y || 0}`}</span>
        </div>
        <div class="w-fit bg-blue-400 font-bold text-white p-1 ml-1 cursor-pointer">
          <button onClick={undoFn}>Undo</button>
        </div>
        <div class="w-fit bg-blue-400 font-bold text-white p-1 cursor-pointer">
          <button onClick={reDo}>Redo</button>
        </div>
      </div>
      {context.blocks &&
        context.blocks.map((ele) => {
          switch (ele.type) {
            case "labelId":
              return (
                <Label
                  openModal={() => {
                    context.setModalTitle("Label");
                    context.setTextM(ele.text);
                    context.setFontWt(ele.fontWeight);
                    context.setFontsize(ele.fontSize);
                    props.onModalOpen();
                  }}
                  onDelete={props.onDelete}
                  id={ele.id}
                  key={ele.id}
                  X={ele.X}
                  Y={ele.Y}
                  fontSize={ele.fontSize}
                  fontWeight={ele.fontWeight}
                  label={ele.text || "This is a label"}
                  onSetCord={props.onSetCord}
                />
              );
            case "inputId":
              return (
                <Input
                  openModal={() => {
                    context.setModalTitle("Input");
                    context.setTextM(ele.text);
                    context.setFontWt(ele.fontWeight);
                    context.setFontsize(ele.fontSize);
                    props.onModalOpen();
                  }}
                  onDelete={props.onDelete}
                  id={ele.id}
                  key={ele.id}
                  X={ele.X}
                  Y={ele.Y}
                  text={ele.text}
                  fontSize={ele.fontSize}
                  fontWeight={ele.fontWeight}
                  onSetCord={props.onSetCord}
                />
              );
            case "buttonId":
              return (
                <Button
                  openModal={() => {
                    context.setModalTitle("Button");
                    context.setTextM(ele.text);
                    context.setFontWt(ele.fontWeight);
                    context.setFontsize(ele.fontSize);
                    props.onModalOpen();
                  }}
                  onDelete={props.onDelete}
                  id={ele.id}
                  key={ele.id}
                  X={ele.X}
                  Y={ele.Y}
                  fontSize={ele.fontSize}
                  fontWeight={ele.fontWeight}
                  onSetCord={props.onSetCord}
                  btnName={ele.text}
                />
              );
          }
        })}
    </div>
  );
};

export default Page;
