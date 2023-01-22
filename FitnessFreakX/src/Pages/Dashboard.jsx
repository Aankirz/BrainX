import React,{useEffect,useState} from 'react'
import { account } from '../services/appwriteConfig';
import { Link, useNavigate } from 'react-router-dom';
import AddHabit from '../Components/AddHabit';

import profile from '../assets/profile.png';

export default function Dashboard() {

    const [userDetails,setUserDetails]=useState({});

const navigate=useNavigate();
    useEffect(()=>{ 
        async function fetchData(){
        try{
            const data= await account.get();
            // console.log(data);
            setUserDetails(data);
            console.log(userDetails);
            
        }catch (e){
            console.log(e.message);
        }
    }
fetchData();
}  ,[])
    console.log("hello from home");
    console.log(userDetails);
    const handleLogOut=async (e)=>{
        e.preventDefault();
    
       await  account.deleteSession('current');
       console.log("deleted");
       navigate('/');
    }
if(userDetails.$id){
    return (

    <div className="userContainer flex">
   
   < div className='flex flex-col items-center'>
   <div className='w-48 h-48 border-2 rounded-full'>
        <img src={profile} alt="" className='w-full h-full rounded-full'/>

        </div>
        <div className="userDetailsContainer w-full h-96 border-2 border-slate-50 text-lg font-bold flex flex-col justify-evenly glassBg">
         <h1>@{userDetails.$id}</h1>
          <h1>email: {userDetails.email}</h1>
          <h1>{userDetails.password}</h1> 
          {console.log(userDetails)}
    
         <button onClick={e=>handleLogOut(e)}>LOGOUT</button>
    </div>
   </div>
       

    <div className="userHabitContainer">
        <AddHabit/>    
    </div>      
        </div>
      )
}
  return(<>
    <h1>Please Login to see this.</h1>
    <button><Link to={'/login'}>Login</Link></button>
  </>
  )
}
