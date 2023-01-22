import React,{useEffect,useState} from 'react'
import { account } from '../services/appwriteConfig';
import { useNavigate } from 'react-router-dom';

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

        <div className="Home">
    
          <h1>{userDetails.name}</h1>
          <h1>{userDetails.email}</h1>
          <h1>{userDetails.password}</h1> 
    
         <button onClick={e=>handleLogOut(e)}>LOGOUT</button>
        </div>
      )
}
  return(
    <h1>Please Login to see this.</h1>
  )
}
