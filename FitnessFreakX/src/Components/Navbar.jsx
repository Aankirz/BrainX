import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className='flex justify-between items-center py-2'>
  
      <h1 className='italic text-4xl font-extrabold w-5/12 h-full  '>FitnessFreak </h1>
       
       <ul className='flex w-7/12 h-full  justify-around italic'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/dashboard'}> Dashboard</Link></li>
            <li><Link to={'/chat'}>Chat</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/signup'}>Signup</Link></li>
       </ul>
    </div>
  )
}
