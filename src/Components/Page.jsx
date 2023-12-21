import React, { useState } from 'react'

const Page = ({onModalOpen}) => {
    const [idState, setIdState] = useState([]);
    const [cord,setCord]=useState({X:'',Y:''});
    const onDrop = (e) => {
        console.log('Dropped');
        const id = e.dataTransfer.getData('text/plain');
        onModalOpen();
        // setIdState((prev)=>{[...prev, id]});

    }
    const displayCord = (e) => {
        // console.log(e.clientX,e.clientY);
        setCord({
            X: e.clientX,
            Y: e.clientY
        })
    }
  return (
    <div class="bg-gray-300 w-4/5" onDrop={onDrop} onDragOver={(e) => e.preventDefault()} onMouseMove={displayCord}>
        <div class='w-32 bg-blue-400 font-bold text-white'>
            {`X: ${cord.X} Y: ${cord.Y}`}
        </div>
    </div>
  )
}

export default Page