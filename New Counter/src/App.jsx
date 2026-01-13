import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  let handleincrese = () => {
    if (count < 25) {
      setCount(prev => prev + 1)
    }
  }
  let handlereset = () => {
    setCount(0)
  }
  let handledecrese = () => {
    if (count > 0) {
      setCount(prev => prev - 1)
    }
  }
  return (

    <div className='w-full h-screen flex justify-center items-center '>
      <div className='bg-zinc-200 rounded-md p-14'>
        <h1 className='text-3xl font-bold mb-5 text-center'>Counter</h1>
        <h1 className='text-4xl font-bold text-center mb-5'>{count}</h1>
        <div className='flex gap-8'>
          <button onClick={handleincrese} className='px-3 py-1 bg-blue-500 rounded-md text-white'>increse</button>
          <button onClick={handlereset} className='px-3 py-1 bg-blue-500 rounded-md text-white'>Reset</button>
          <button onClick={handledecrese} className='px-3 py-1 bg-blue-500 rounded-md text-white'>decrese</button>
        </div>

      </div>

    </div>

  )

}

export default App
