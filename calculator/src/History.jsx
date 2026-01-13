import React, { useEffect, useState } from 'react'

const History = () => {
    const [history, sethistory] = useState([]);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("history")) || [];

        sethistory(data);
        console.log(data);
    }, [])
    return (
        <div className='w-96 h-[70%] bg-blue-200 p-10 rounded-md'>
            <h1 className='text-2xl font-semibold text-blue-900'>History List</h1>
            {history.length === 0 && <p>No history</p>}
            <ul>
                {history.map((item, index) => {
                    return(
                    <li className='font-semibold' key={index}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default History