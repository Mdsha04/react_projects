import React, { useState } from 'react'

const BgChanger = () => {

    const [color, setColor] = useState("olive");

    return (
        <>
            <div className="w-screen h-screen duration-200"
                style={{ backgroundColor: color }}
            >
            </div>
            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4 py-1 '>
                <div className='flex flex-wrap justify center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                    <button
                        onClick={() => setColor("red")}
                        className='outline-none px-4 rounded-full shadow-lg text-white'
                        style={{ backgroundColor: "red" }}>Red</button>
                    <button
                        onClick={() => setColor("green")}
                        className='outline-none px-4 rounded-full shadow-lg text-white'
                        style={{ backgroundColor: "green" }}>Green</button>
                    <button
                        onClick={() => setColor("blue")}
                        className='outline-none px-4 rounded-full shadow-lg text-white'
                        style={{ backgroundColor: "blue" }}>Blue</button>
                    <button
                        onClick={() => setColor("yellow")}
                        className='outline-none px-4 rounded-full shadow-lg text-black'
                        style={{ backgroundColor: "yellow" }}>Yellow</button>
                    <button
                        onClick={() => setColor("black")}
                        className='outline-none px-4 rounded-full shadow-lg text-white'
                        style={{ backgroundColor: "black" }}>Black</button>
                    <button
                        onClick={() => setColor("grey")}
                        className='outline-none px-4 rounded-full shadow-lg text-white'
                        style={{ backgroundColor: "grey" }}>Grey</button>
                    <button
                        onClick={() => setColor("pink")}
                        className='outline-none px-4 rounded-full shadow-lg text-white'
                        style={{ backgroundColor: "pink" }}>Pink</button>
                    <button
                        onClick={() => setColor("purple")}
                        className='outline-none px-4 rounded-full shadow-lg text-white'
                        style={{ backgroundColor: "purple" }}>Purple</button>
                    <button
                        onClick={() => setColor("lavender")}
                        className='outline-none px-4 rounded-full shadow-lg text-black'
                        style={{ backgroundColor: "lavender" }}>Lavender</button>
                    <button
                        onClick={() => setColor("white")}
                        className='outline-none px-4 rounded-full shadow-lg text-black'
                        style={{ backgroundColor: "white" }}>White</button>

                </div>
            </div>
        </>
    )
}

export default BgChanger
