import "./index.css";
import Sidebar from "./Components/Sidebar";
import Page from "./Components/Page";
import ModalBackdrop from "./Components/ModalBackdrop";
import { useEffect, useState } from "react";
function App() {
  const [modal, setModal] = useState(false);
  const [movedId, setId] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);
  const [cord, setCord] = useState({ X: "", Y: "" });
  const [blocks, setBlocks] = useState([]);
  const [textM, setTextM] = useState(null);
  const [fontSize, setFontsize] = useState(null);
  const [fontWt, setFontWt] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("pageConfig") !== null) {
      setBlocks(JSON.parse(localStorage.getItem("pageConfig")));
    }
  }, []);

  const onSetCordHandler = (coordinates, id) => {
    setCord(coordinates);
    setId(id);
  };

  const onSaveHandler = (cordX, cordY, text, fontSize, fontWeight) => {
    console.log(cordX, cordY, text, fontSize, fontWeight,movedId);
    if (
      movedId !== "labelId" &&
      movedId !== "inputId" &&
      movedId !== "buttonId"
    ) {
      setBlocks((prev) => {
        const indexToUpdate = prev.findIndex(
          (item) => Number(item.id) === Number(movedId)
        );
        const updatedObject = {
          text: text || blocks[indexToUpdate].text,
          X: cordX,
          Y: cordY,
          fontSize: fontSize,
          fontWeight: fontWeight,
          id: Number(movedId),
          type: blocks[indexToUpdate].type,
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
      console.log("Moving", movedId);
    } else {
      console.log("Generating New", movedId);
      const newArray = [
        ...blocks,
        {
          type: movedId,
          text: text,
          X: cordX,
          Y: cordY,
          fontSize: fontSize,
          fontWeight: fontWeight,
          id: Math.random(),
        },
      ];
      localStorage.setItem("pageConfig", JSON.stringify(newArray));
      setBlocks(newArray);
      console.log(newArray);
    }
    setTextM("");
    setFontWt("");
    setFontsize("");
    setFontWt("");
    setModal(false);
    setId(null);
  };

  const onDeleteHandler = (id) => {
    const newArray = blocks.filter((ele) => {
      return ele.id !== id;
    });
    localStorage.setItem("pageConfig", JSON.stringify(newArray));
    setBlocks(newArray);
  };

  return (
    <>
      <div>
        {modal && (
          <ModalBackdrop
            textM={textM}
            fontSize={fontSize}
            fontWt={fontWt}
            title={modalTitle}
            onSave={onSaveHandler}
            cord={cord}
            onClose={() => {
              setTextM("");
              setFontWt("");
              setFontsize("");
              setFontWt("");
              setModal(false);
            }}
          />
        )}
        <div class="flex">
          <Page
            setModalTitle={setModalTitle}
            setId={setId}
            onDelete={onDeleteHandler}
            blocks={blocks}
            cord={cord}
            onSetCord={onSetCordHandler}
            onModalOpen={() => setModal(true)}
            setTextM={setTextM}
            setFontWt={setFontWt}
            setFontsize={setFontsize}
            onSave={onSaveHandler}
            setBlocks={setBlocks}
          />
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
