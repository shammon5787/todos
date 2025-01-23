import React from 'react'

const TodoApp = () => {
  return (
    <div>TodoApp</div>
  )
}

export default TodoApp


// import React, { useState } from 'react'

// const TodoApp = ({addItem}) => {
//    const [inputText, setInputText] = useState('')
//    const changes = (e)=>{
//     setInputText(e.target.value)
//    }
//   return (
//     <div className='flex itemc justify-between'>
//         <input onChange = {changes} type="text" placeholder='enter item' className='text-black p-1' value={inputText} />
//         <button onClick={()=>{
//             addItem(inputText)
//             setInputText('')
//         }} className='bg-black p-2 rounded-full'>+ </button>
//     </div>
//   )
// }

// export default TodoApp