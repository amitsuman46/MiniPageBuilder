import "./index.css";
import Sidebar from "./Components/Sidebar";
import Page from "./Components/Page";
import ModalBackdrop from "./Components/ModalBackdrop";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
function App() {
  const context = useContext(AppContext);
  const onSetCordHandler = (coordinates, id) => {
    context.setCord(coordinates);
    context.setId(id);
  };

  const onSaveHandler = (cordX, cordY, text, fontSize, fontWeight) => {
    console.log(cordX, cordY, text, fontSize, fontWeight, context.movedId);
    if (
      context.movedId !== "labelId" &&
      context.movedId !== "inputId" &&
      context.movedId !== "buttonId"
    ) {
      context.setBlocks((prev) => {
        const indexToUpdate = prev.findIndex(
          (item) => Number(item.id) === Number(context.movedId)
        );
        const updatedObject = {
          text: text || context.blocks[indexToUpdate].text,
          X: cordX,
          Y: cordY,
          fontSize: fontSize,
          fontWeight: fontWeight,
          id: Number(context.movedId),
          type: context.blocks[indexToUpdate].type,
        };
        const newArray =
          indexToUpdate !== -1
            ? [
                ...prev.slice(0, indexToUpdate),
                updatedObject,
                ...prev.slice(indexToUpdate + 1),
              ]
            : [...prev, updatedObject];
        localStorage.setItem("pageConfig", JSON.stringify(newArray));
        console.log(newArray);
        return newArray;
      });
      console.log("Editing existing", context.movedId);
    } else {
      console.log("Generating New", context.movedId);
      const newArray = [
        ...context.blocks,
        {
          type: context.movedId,
          text: text,
          X: cordX,
          Y: cordY,
          fontSize: fontSize,
          fontWeight: fontWeight,
          id: Math.random(),
        },
      ];
      localStorage.setItem("pageConfig", JSON.stringify(newArray));
      context.setBlocks(newArray);
      context.setUndo((prev) => {
        const undoUpdated = [...prev];
        undoUpdated.push(newArray);
        return undoUpdated;
      });
      context.setHistory((prev) => {
        const undoUpdated = [...prev];
        undoUpdated.push(newArray);
        return undoUpdated;
      });
      context.setIndex((prev) => prev + 1);
      console.log(newArray);
    }
    context.setTextM("");
    context.setFontWt("");
    context.setFontsize("");
    context.setFontWt("");
    context.setModal(false);
    context.setId(null);
  };

  const onDeleteHandler = (id) => {
    const newArray = context.blocks.filter((ele) => {
      return ele.id !== id;
    });
    localStorage.setItem("pageConfig", JSON.stringify(newArray));
    context.setBlocks(newArray);
  };

  return (
    <>
      <div class="h-[100vh] w-[100vw]">
        {context.modal && (
          <ModalBackdrop
            onSave={onSaveHandler}
            onClose={() => {
              context.setTextM("");
              context.setFontWt("");
              context.setFontsize("");
              context.setModal(false);
            }}
          />
        )}
        <div class="flex">
          <Page
            onDelete={onDeleteHandler}
            onSetCord={onSetCordHandler}
            onModalOpen={() => context.setModal(true)}
            onSave={onSaveHandler}
          />
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
