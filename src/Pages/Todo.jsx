import React, { useState } from 'react'
import TodoApp from '../Todo/TodoApp'
import Disptodoapp from '../Todo/Disptodoapp'

const Todo = () => {
  const [list, setList] = useState([])
  const addList = (newInput)=>{
    setList([... list, newInput])
  }
  const deleteData = (del)=>{
    const newdata = [... list]
    newdata.splice(del ,1)
      setList([... newdata])
    
  }
  return (
    <div className='mt-32 m-auto flex flex-col items-center justify-items-center w-[50vw] '>
      <div className='bg-slate-600 w-full p-4 shadow-2xl rounded-lg'> 
        <TodoApp addList = {addList} />
        <hr className='my-4 w-full' />
        {
          list.map((lisItem, i)=>{
            return(
              <Disptodoapp item = {lisItem} key={i} deleteData = {deleteData} index = {i} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Todo


// import React, { useState } from 'react'
// import TodoApp from '../Todo/TodoApp'
// // import Disptodoapp from '../Todo/Disptodoapp'
// import Dispto from '../Todo/Disptodoapp'

// const Todo = () => {
//     const [select, setSelect] = useState([])
//     const addItem = (news)=>{
//         if(news === ''){
//             alert('enter')
//         }else{
//         setSelect([... select, news])
//         }
//     }
//     let show = 0;
//    const deleted = (key)=>{
//     const newdel = [... select]
//     newdel.splice(key, 1)
//     setSelect([... newdel])
//    }
//   return (
//     <div className='mt-20 bg-green-900 m-auto w-[40vw] p-3'>
//        <TodoApp addItem = {addItem} />
//        {
//         select.map((newItem, i)=>(
//             <Dispto item={newItem} key={i} deleted = {deleted} index = {i} />
//         ))
//        }
//     </div>
//   )
// }

// export default Todo