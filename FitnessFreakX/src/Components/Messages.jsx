import React from 'react';
import { account } from '../services/appwriteConfig';

const Messages = ({message,name}) => {
    
    const [userDetails,setUserDetails]=useState();

    useEffect(()=>{
         const user=account.get();

         getUser.then(res => {setUserDetails(res)},err => {console.log(err)})
         
         setUserDetails(user);
    },[])
    
    
    return (
      <div className='message'>
        {userDetails && <div>
                           <p>{userDetails.name===name ? '' : `${name}`}</p>
                           <p>{message}</p>
                       </div>}
            
        </div>
    );
}

export default Messages;
