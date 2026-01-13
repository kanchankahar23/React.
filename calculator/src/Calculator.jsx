import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Calculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");
    return (
        <div>
            <div className='w-full h-screen flex justify-center items-center bg-black'>
                <div className='w-96 h-[70%] flex bg-zinc-300 rounded-md flex-col justify-center items-center gap-10 p-10'>
                    <h1 className='text-4xl font-bold text-blue-900'>Calculator</h1>
                    <input
                        onChange={(e) => {
                            setNum1(e.target.value);
                        }}
                        className='bg-zinc-400 p-2 w-full border border-blue-300 text-zinc-700 rounded-md' value={num1} type="number" placeholder='Enter a number'></input>
                    <input
                        onChange={(e) => setNum2(e.target.value)}
                        className='bg-zinc-400 p-2 w-full border border-blue-300 text-zinc-700 rounded-md' value={num2} type="number" placeholder='Enter a number'></input>
                    <div className='flex justify-center items-center gap-8'>

                        <button onClick={() => {
                            const res = Number(num1) + Number(num2);
                            localStorage.setItem("Calculation",res)
                          
                            if (res > 100) {
                                alert("You cannot Calculate more than 100")
                            }
                              setResult(res);
                        }
                        } className='px-4 py-1 rounded-md bg-blue-600 text-white font-bold'>+</button>
                        
                        <button onClick={() => {
                            const res = Number(num1) - Number(num2);
                         localStorage.setItem("Calculation",res)
                            setResult(res);
                            if (res > 100) {
                                alert("You cannot Calculate more than 100")
                            }
                        }} className='px-4 py-1 rounded-md bg-blue-600 text-white font-bold'>-</button>
                        

                        <button onClick={() => {
                            const res = Number(num1) * Number(num2);
                             localStorage.setItem("Calculation",res)
                            setResult(res);
                            if (res > 100) {
                                alert("You cannot Calculate more than 100")
                                setResult("")
                            }
                        }} className='px-4 py-1 rounded-md bg-blue-600 text-white font-bold'>*</button>
                        
                        <button onClick={() => {
                            const res = Number(num1) / Number(num2);
                             localStorage.setItem("Calculation",res)
                            setResult(res);
                            if (res > 100) {
                                alert("You cannot Calculate more than 100")
                            }
                        }} className='px-4 py-1 rounded-md bg-blue-600 text-white font-bold'>/</button>
                        
                    </div>
                    <button className='px-4 py-2 rounded-md bg-red-600 text-white'>History</button>
                    <div>
                        <h1 className='text-3xl text-blue-900  font-semibold'>Answer = {result}</h1>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Calculator