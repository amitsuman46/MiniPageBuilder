import React from 'react'
import ModalCard from './ModalCard'
const ModalBackdrop = ({onClose,cord,onSave,title,textM,fontSize,fontWt}) => {
  return (
    <div class='z-10 fixed inset-0 h-screen w-screen bg-purple-600/25 flex items-center justify-center'>
        <ModalCard fontSize={fontSize} fontWt={fontWt} textM={textM} title={title} cord={cord} onClose={onClose} onSave={onSave}/>
    </div>
  )
}

export default ModalBackdrop