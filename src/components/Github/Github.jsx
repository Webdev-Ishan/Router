import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
//     const [data,setdata]=useState(0);
//     useEffect(()=>{

// async function Fetchit() {

//     try{
// const response= await fetch('https://api.github.com/users/hiteshchoudhary')
// const data= await response.json()
// setdata(data);
//     }

//     catch{
//         alert('Tyhe result is not fetched!!!')
//     }
// }
// Fetchit()

//     },[])
  return (
    <div className='bg-gray-500 text-center text-white text-lg flex justify-around items-center p-8'>
        <img src="https://images.pexels.com/photos/28534890/pexels-photo-28534890/free-photo-of-charming-cheese-shopfront-with-blue-awning.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="no" className='w-52 h-52'/>
      Github Followers: {data.followers}
    </div>
  )
}



export async function Githubinfo(){

   const response= await fetch('https://api.github.com/users/hiteshchoudhary')

return response.json();

}
export default Github