import React from 'react'

const Disptodoapp = ({item, deleted, index}) => {
  return (
    <div className='flex items-center justify-between'>
      <h1>{item} </h1>
      <button onClick={e=>{
        deleted({index})
      }} className='bg-green-500'>del</button>
    </div>
  )
}

export default Disptodoapp


// import React from 'react'

// const Disptodoapp = ({item, deleted, index}) => {
//   return (
//     <div className='flex items-center justify-between mt-6'>
//         <h1>{item}</h1>
//         <button onClick={e=>{
//             deleted({index})
//         }} className='bg-black p-2 rounded-full'>Del</button>
//     </div>
//   )
// }

// export default Disptodoapp
