import { createContext } from "react";
import { useEffect, useState } from "react";

export const AppContext = createContext({
  history: null,
  setHistory: null,
  indexHist: null,
  setIndex: null,
  undoBlocks: null,
  setUndo: null,
  reDoBlocks: null,
  setRedo: null,
  modal: null,
  setModal: null,
  movedId: null,
  setId: null,
  modalTitle: null,
  setModalTitle: null,
  cord: null,
  setCord: null,
  blocks: null,
  setBlocks: null,
  textM: null,
  setTextM: null,
  fontSize: null,
  setFontsize: null,
  fontWt: null,
  setFontWt: null,
});

export const AppProvider = ({ children }) => {

    const [history, setHistory] = useState([]);
    const [indexHist, setIndex] = useState(-1);
    const [undoBlocks, setUndo] = useState([]);
    const [reDoBlocks, setRedo] = useState([]);
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
          setHistory((prev) => [
            ...prev,
            JSON.parse(localStorage.getItem("pageConfig")),
          ]);
          setIndex(0);
        }
      }, []);

return <AppContext.Provider
value={{history,setHistory,indexHist,setIndex,undoBlocks,setUndo,
reDoBlocks,setRedo,modal,setModal,movedId,setId,modalTitle,setModalTitle,
cord,setCord,blocks,setBlocks,textM,setTextM,fontSize,setFontsize,fontWt,setFontWt}}
>{children}</AppContext.Provider>
}