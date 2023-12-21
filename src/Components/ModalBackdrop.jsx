import React from 'react'
import ModalCard from './ModalCard'
const ModalBackdrop = ({onClose}) => {
  return (
    <div class='fixed inset-0 h-screen w-screen bg-purple-600/25 flex items-center justify-center'>
        <ModalCard onClose={onClose}/>
    </div>
  )
}

export default ModalBackdrop