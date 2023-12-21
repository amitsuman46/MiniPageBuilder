import "./index.css";
import Sidebar from "./Components/Sidebar";
import Page from "./Components/Page";
import ModalCard from "./Components/ModalCard";
import ModalBackdrop from "./Components/ModalBackdrop";
import { useState } from "react";
function App() {
  const [modal,setModal] = useState(false);

  return (
    <>
      <div>
        {modal  && <ModalBackdrop onClose={()=>setModal(false)}/>}
        <div class="flex">
          <Page onModalOpen={()=>setModal(true)} />
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
