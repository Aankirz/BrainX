import React,{useState,useRef,useEffect} from 'react';
import { account, database } from '../services/appwriteConfig';
import Messages from '../Components/Messages';


const Chat = () => {

    const [messages,setMessages]=useState([]);
    const [userDetails,setUserDetails]=useState();

    const messageInputRef=useRef();

    useEffect(()=>{
        const user=account.get();


    setUserDetails(user);



    },[])

    useEffect(()=>{

     database.listDocuments('63cc20e1e6d14732003c').then(res => setMessages(res),err=> console.log(err));

    },[])

    const handleSubmit=e=>{
        e.preventDefault();

        const messageInput=messageInputRef.current.value;

        database.createDocument("63cc20e1e6d14732003c",'unique()',{
            message:messageInput,
            name:userDetails.name
        }).then(res => setMessages([...messages,{message:messageInput,name:userDetails.name }]),err => console.log(err))

        messageInputRef.current.value=''
    }

    return (
        <div>
            {userDetails && (
            <>
            <div><h1>Welcome</h1></div>
            <div>
                {messages.map((message,index) => {<Messages message={message.message} name={message.name}/>} )}
            </div>
            <form action="" onSubmit={handleSubmit}>
               <div className="message">
                <input type="text" ref={messageInputRef}/>
               </div>
               <div>
                <button onClick={handleSubmit}>Send</button>
               </div>
            </form>
            </>
            
            )}
        </div>
    );
}

export default Chat;
