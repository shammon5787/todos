import React from 'react'

const Todo = () => {
  return (
    <div>Todo</div>
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