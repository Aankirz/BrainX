import React,{useState} from 'react';
import { account } from '../services/appwriteConfig';
import { useNavigate } from 'react-router-dom';





const Signup = () => {

    const [userDetails,setUserDetails]=useState({
        email:"",
        userName:"",
        password:"",
        height:"",
        weight:"",
        Age:"",
        Gender:"",
    })

    console.log(userDetails);

 const navigate=useNavigate();

    const signUpUser=async (e)=>{
        e.preventDefault();
    
        try{
            const newUser=await  account.create(
                userDetails.userName,
                userDetails.email,
                userDetails.password,
                userDetails.height,
                userDetails.weight,
                userDetails.Age,
                );

               await account.createEmailSession(userDetails.email,userDetails.password);
               navigate('/dashboard');
               console.log(newUser);     
    
        }catch(e){
            console.log(e.message);
        }
       
             
    
     

    }

    return (
        <div>
            <form action="" style={{display:"flex",flexDirection:"column",width:"50%"}}>
               <label htmlFor="username">Username</label> 
               <input type="text" id='username' onChange={(e)=>{setUserDetails({...userDetails,userName: e.target.value})}}/>

               <label htmlFor="email">Email</label> 

               <input type="email" name="" id="email" onChange={e=>setUserDetails({...userDetails,email:e.target.value})}/>

               <label htmlFor="password">Password</label> 

               <input type="password" name="" id="password" onChange={(e)=>{setUserDetails({...userDetails,password:e.target.value})}}/>
               
                <label htmlFor="height">Height</label>
                <input type="text" id="height" onChange={(e)=>{setUserDetails({...userDetails,height:e.target.value})}}/>

                <label htmlFor="weight">Weight</label>
                <input type="text" id="weight" onChange={(e)=>{setUserDetails({...userDetails,weight:e.target.value})}}/>

                <label htmlFor="age">Age</label>
                <input type="text" id="age" onChange={(e)=>{setUserDetails({...userDetails,Age:e.target.value})}}/> 

               <button onClick={e=>signUpUser(e)}><input type="submit" value="Submit" /></button>
            </form>
        </div>
    );
}

export default Signup;
