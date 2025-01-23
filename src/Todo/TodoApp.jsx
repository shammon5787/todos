import React, { useState } from 'react'

const TodoApp = ({addList}) => {
  const [input, setInput] = useState('')
  const change = (e)=>{
    const newInput = input
    setInput(e.target.value)
  }
  // console.log(input)
  return (
   <>
    <div className='flex flex-row items-center gap-3'>
      <input onChange={change} type="text" placeholder='enter value' className='p-2 w-full rounded-md outline-none text-black' value={input} />
      <button onClick={()=>{
        addList(input)
        setInput('')
      }} className='bg-blue-950 p-2 rounded-full'>Add </button>
    </div>
    {/* <h1>{input}</h1> */}
   </>
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