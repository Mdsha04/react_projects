import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/Mdsha04`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // } , [])
  return (
        <div className='text-center m-5 bg-orange-500 text-white p-4 text-2xl '>
            GitHub Followers : {data.followers}
           <img src={data.avatar_url} alt='Github picture' width={300}/>
        </div>
    )

}
export default Github;

export const getLoaderGithubInfo = async()=>{
    const response = await fetch(`https://api.github.com/users/Mdsha04`)
    return response.json()
}
