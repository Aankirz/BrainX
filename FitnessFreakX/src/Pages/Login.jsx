import React,{useState} from 'react'
import { account } from '../services/appwriteConfig';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  
    const navigate=useNavigate();
    const [userDetails,setUserDetails]=useState(
        {
            email:"",
            password:""
        }
    );
    console.log(userDetails);
    const loginUser=async (e)=>{
        e.preventDefault();

        try{
         await account.createEmailSession(userDetails.email,userDetails.password);
         navigate('/home');
        }catch (err){
           console.log(err.message);
        }


        console.log(userDetails);

    }
    return (
   <div className="Login">
   
     <form action="">
        <label htmlFor="email">Email</label>
        <input type="email" name="" id="email" onChange={e=>setUserDetails({...userDetails,email:e.target.value})}/>

<label htmlFor="password">Password</label> 
<input type="password" name="" id="password" onChange={(e)=>{setUserDetails({...userDetails,password:e.target.value})}}/>


<button onClick={e=>loginUser(e)}><input type="submit" value="Submit" /></button>
     </form>
   </div>
  )
}
