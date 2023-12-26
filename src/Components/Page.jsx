import React, { useState } from "react";
import Label from "./Blocks/Label";
import Input from "./Blocks/Input";
import Button from "./Blocks/Button";
import { saveAs } from "file-saver";

const Page = (props) => {

  const onDrop = (e) => {
    let fromSidebar = true;
    const id = e.dataTransfer.getData("text/plain");
    switch (id) {
      case "labelId":
        props.setModalTitle("Label");
        break;
      case "inputId":
        props.setModalTitle("Input");
        break;
      case "buttonId":
        props.setModalTitle("Button");
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

      const index = props.blocks.findIndex(
        (obj) => Number(obj.id) === Number(id)
      );
      const updatedObject = {
        text: props.blocks[index].text,
        X: e.pageX,
        Y: e.pageY,
        fontSize: props.blocks[index].fontSize,
        fontWeight: props.blocks[index].fontWeight,
        id: Number(id),
        type: props.blocks[index].type,
      };
      const newArray =
        index !== -1
          ? [
              ...props.blocks.slice(0, index),
              updatedObject,
              ...props.blocks.slice(index + 1),
            ]
          : [...props.blocks, updatedObject];

      localStorage.setItem("pageConfig", JSON.stringify(newArray));

      props.setBlocks(newArray);
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
          <span>{`X: ${props.cord.X || 0} , Y: ${props.cord.Y || 0}`}</span>
        </div>
      </div>
      {props.blocks.map((ele) => {
        switch (ele.type) {
          case "labelId":
            return (
              <Label
                setId={props.setId}
                openModal={() => {
                  props.setModalTitle("Label");
                  props.setTextM(ele.text);
                  props.setFontWt(ele.fontWeight);
                  props.setFontsize(ele.fontSize);
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
                setId={props.setId}
                openModal={() => {
                  props.setModalTitle("Input");
                  props.setTextM(ele.text);
                  props.setFontWt(ele.fontWeight);
                  props.setFontsize(ele.fontSize);
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
                setId={props.setId}
                openModal={() => {
                  props.setModalTitle("Button");
                  props.setTextM(ele.text);
                  props.setFontWt(ele.fontWeight);
                  props.setFontsize(ele.fontSize);
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
