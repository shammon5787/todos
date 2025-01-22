import React, { useState } from 'react'

const TodoApp = ({addList}) => {
  const [inputtext, setInputtext] = useState('')
  const changed = (e)=>{
    setInputtext(e.target.value)
  }
  return (
    <div className='flex items-center justify-between'>
      <input onChange={changed} type="text" placeholder='enter data' className='text-black' value={inputtext} />
      <button onClick={()=>{
        addList(inputtext)
        setInputtext('')
      }} className='bg-green-500'>add</button>
      {/* <h1>{inputtext}</h1> */}
    </div>
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