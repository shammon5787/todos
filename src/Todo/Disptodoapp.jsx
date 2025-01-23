import React from 'react'

const Disptodoapp = ({item, deleteData, index}) => {
  return (
    <>
      <div className='flex flex-row items-center justify-between gap-3 mt-2'>
        <h1>{item}</h1>
        <button onClick={e=>{
          deleteData({index})
        }} className='bg-blue-950 p-2 rounded-full'>Del </button>
      </div>
    </>

  )
}

export default Disptodoapp