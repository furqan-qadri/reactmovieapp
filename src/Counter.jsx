import React from 'react'
import { useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState(11);

  return (
    <div className='flex justify-center items-center flex-col gap-3 bg-yellow-100 p-10'>

    <div className='text-3xl font-bold rounded-2xl bg-slate-50 p-6'> {counter}</div>
    <button onClick={()=> setCounter((prevCount=>prevCount+1))} className='rounded-xl bg-green-500 text-white p-4'>Increase + </button>
    <button onClick={()=> setCounter((prevCount=>prevCount-1))} className='rounded-xl bg-red-500 text-white p-4'>Decrease - </button>

    </div>
  )
}

export default Counter