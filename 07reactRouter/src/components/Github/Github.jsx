import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const Github = () => {

     const data = useLoaderData();

    // const [data, setData] = useState([])
    // useEffect(()=>{
    //      fetch('https://api.github.com/users/dheeraj1952k1')
    //      .then( response => response.json())
    //      .then(data => {
    //         console.log(data);
    //         setData(data);
    //      })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Bio :  {data.bio} 
     <img src={data.avatar_url} className="p-4"alt="Git picture" width={300}  /></div>
  )
}
export default Github
export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/dheeraj1952k1')
    return response.json();
}

