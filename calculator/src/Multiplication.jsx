import React from 'react'

const Multiplication = () => {
      const data = localStorage.getItem("Calculation")
  return (
   <div className='w-full h-screen flex justify-center items-center bg-black'>
            <div className='w-96 h-56 bg-zinc-200 rounded-md flex flex-col justify-center items-center  '>
                <h1 className='text-2xl font-bold text-blue-700' >Multiplication completed</h1>
                <h1 className='text-3xl mt-2 font-bold text-blue-700'>Successfully🎉</h1>
                 <p className='text-2xl mt-8 text-blue-800'>Your answer is {data}</p>
            </div>
        </div>
  )
}

export default Multiplication