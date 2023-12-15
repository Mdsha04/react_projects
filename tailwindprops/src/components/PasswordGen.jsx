import React, { useCallback, useEffect, useRef, useState } from 'react'

const PasswordGen = () => {

    const [password, setPassword] = useState();
    const [length, setLength] = useState(8);
    const [charAllowed, setCharAllowed] = useState(false);
    const [numAllowed, setNumAllowed] = useState(false);

    const PasswordGenerater = useCallback(() => {
        let pass = '';
        let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";
        if (numAllowed) str += "0123456789";
        if (charAllowed) str += `~!@#$%^&*()_+?/.,;'`;

        for (let i = 1; i <= length; i++) {
            let password = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(password)
        }

        setPassword(pass);

    }, [length, numAllowed, charAllowed,setPassword])

    useEffect(()=>{
            PasswordGenerater()
    },[PasswordGenerater,numAllowed,length,charAllowed])

    const passwordRef = useRef(null)

    const copyToClipboard = useCallback(()=>{
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0,100 )
        window.navigator.clipboard.writeText(password)
    },[password])

    return (
        <>
            <div className='w-full max-w-md mx-auto shodow-md rounded-lg px-4 py-3 my-8 text-red-500 bg-gray-700 ' >
                <h2 className='text-red-500 text-center my-4'>
                    Password Generater</h2>
                <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                    <input
                        type='text'
                        placeholder='Password'
                        value={password}
                        className='outline-none w-screen py-1 px-3'
                        readOnly
                        ref={passwordRef} 
                    />
                    <button className='outline-none bg-blue-600 text-black px-3 py-0.5 shrink-0'
                    onClick={copyToClipboard}
                    
                    >Copy
                    </button>

                </div>
                <div className='flex text-sm gap-x-2 '>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type='range'
                            min={6}
                            max={99}
                            value={length}
                            className='cursor-pointer'
                            onChange={(e) => setLength(e.target.value)}
                           
                        />
                        <label htmlFor="length">Length:{length}</label>
                        <div />
                        <div className='flex items-center gap-x-1'>
                            <input
                                type='checkbox'
                                defaultChecked={numAllowed}
                                id='numberInput'
                                onChange={() => {
                                    setNumAllowed((prev) => !prev)
                                }}

                            />
                            <label htmlFor="number">Number</label>
                        </div >

                        <div className='flex items-center gap-x-1'>
                            <input
                                type='checkbox'
                                defaultChecked={charAllowed}
                                id='charInput'
                                onChange={() => {
                                    setCharAllowed((prev) => !prev)
                                }}
                            />
                            <label htmlFor="char">Character</label>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordGen
