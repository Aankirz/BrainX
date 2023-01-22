import React,{useState,useRef} from 'react';
import ContributionGraph from './ContributionGraph';

const AddHabit = () => {

    const [start,setStart]=useState(false);



    return (
        <>
        {start ? <div >Motivation</div> : <div className="AddHabit">
            <form action="">
               
                <select name="" id="" required className='text-slate-400'>

                    <option value="30" >30DaysofChallenge</option>
                    <option value="100">100DaysofChallenge</option>

                </select>

                <button onClick={()=>{setStart(true) }}>START NOW</button>
            </form>

           
        </div>  }
        
        </>
        
    );
}

export default AddHabit;
