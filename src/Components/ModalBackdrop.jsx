import React from "react";
import ModalCard from "./ModalCard";
const ModalBackdrop = ({
  onClose,

  onSave,
}) => {
  return (
    <div class="z-10 fixed inset-0 h-screen w-screen bg-purple-600/25 flex items-center justify-center">
      <ModalCard onClose={onClose} onSave={onSave} />
    </div>
  );
};

export default ModalBackdrop;
