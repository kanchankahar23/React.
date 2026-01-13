import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import History from './History';
const Calculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");
    const [showhistory, setShowhistory] = useState(false);   //for show/hide

    const handleadd = () => {
        const res = Number(num1) + Number(num2);

        const oldHistory = JSON.parse(localStorage.getItem("history")) || [];

        const newHistory = [
            ...oldHistory, `${num1} + ${num2} = ${res}`
        ];

        localStorage.setItem("history", JSON.stringify(newHistory))
        if (res > 100) {
            alert("You cannot Calculate more than 100")
        }
        setResult(res);
    }
    return (
        <div>
            <div className='w-full h-screen flex justify-center items-center gap-50 bg-black'>
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

                        <button onClick={handleadd}
                            className='px-4 py-1 rounded-md bg-blue-600 text-white font-bold'>+</button>

                        <button onClick={() => {
                            const res = Number(num1) - Number(num2);
                            const oldHistory = JSON.parse(localStorage.getItem("history")) || [];

                            const newHistory = [
                                ...oldHistory, `${num1} - ${num2} = ${res}`
                            ];

                            localStorage.setItem("history", JSON.stringify(newHistory))
                            setResult(res);
                            if (res > 100) {
                                alert("You cannot Calculate more than 100")
                            }
                        }} className='px-4 py-1 rounded-md bg-blue-600 text-white font-bold'>-</button>


                        <button onClick={() => {
                            const res = Number(num1) * Number(num2);
                            const oldHistory = JSON.parse(localStorage.getItem("history")) || [];

                            const newHistory = [
                                ...oldHistory, `${num1} * ${num2} = ${res}`
                            ];

                            localStorage.setItem("history", JSON.stringify(newHistory))
                            setResult(res);
                            if (res > 100) {
                                alert("You cannot Calculate more than 100")
                                setResult("")
                            }
                        }} className='px-4 py-1 rounded-md bg-blue-600 text-white font-bold'>*</button>

                        <button onClick={() => {
                            const res = Number(num1) / Number(num2);
                            const oldHistory = JSON.parse(localStorage.getItem("history")) || [];

                            const newHistory = [
                                ...oldHistory, `${num1} / ${num2} = ${res}`
                            ];

                            localStorage.setItem("history", JSON.stringify(newHistory))
                            setResult(res);
                            if (res > 100) {
                                alert("You cannot Calculate more than 100")
                            }
                        }} className='px-4 py-1 rounded-md bg-blue-600 text-white font-bold'>/</button>

                    </div>
                    <button onClick={() => setShowhistory(!showhistory)} className='px-4 py-2 rounded-md bg-red-600 text-white'>History</button>
                    <div>
                        <h1 className='text-3xl text-blue-900  font-semibold'>Answer = {result}</h1>
                    </div>

                </div>
                <div>
                    {showhistory && <History />}
                </div>

            </div>
        </div>
    )
}

export default Calculator