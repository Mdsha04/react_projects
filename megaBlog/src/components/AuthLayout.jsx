import React from 'react'
import { useSelector } from "react-redux"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Protected ({ children, authentication = true }){

    const navigate = useNavigate();
    const authStatus = useSelector(state => state.auth.status)
    const [loader, setLoader] = useState(true)

    useEffect(() => {

        // we can write this also
        // if(authStatus===true){
        //     navigate("/")
        // }else if(authStatus===false){
        //     navigate('/login')
        // }


        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])



    return loader ? <h1>loading...</h1> : <>{children}</>
}


