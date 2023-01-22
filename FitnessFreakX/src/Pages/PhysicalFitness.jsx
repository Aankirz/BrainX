
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { muscleData } from '../data';


export default function PhysicalFitness() {

  const [exercises, setExercises] = useState([]);
  const [muscle,setMuscle]=useState('biceps');
 useEffect(()=>{
  const exerciseList = async () => {
    const res = await axios.get(
      'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
      {
        headers: {
          'X-Api-Key': 'pdlsYxCmw07QPsTYG8OvMQ==F15vVQI5OZIRtmeH'
        }
      }
    );
    console.log(res.data);
    setExercises(res.data);
    return res.data;
  };
  exerciseList();
 },[muscle])

 
  return (
    <div className="PhysicalFitness ">

     <div className="searchBox ">
     <input type="text" onChange={e=>setMuscle(e.target.value)} className='w-10/12 h-9 bg-fuchsia-200 rounded-md px-5 my-4' placeholder='Enter muscle'/>

     </div>

      <div className="exerciseContainer w-full h-5/6  flex  p-0.5 ">
     
     <div className="bodyPart w-2/12 h-full flex flex-col items-start  mr-1 text-fuchsia-400 cursor-pointer italic">
     
      {
        muscleData.map(x =>  <li className='text-lg font-normal cursor-pointer mb-4' key={x.id} onClick={()=>setMuscle(x.muscle)}>{x.muscle}</li>)
      }
     
     
     </div>

     
      

      <div className="exerciseList w-8/12 h-full  ">
    
      {exercises.map(x=>  <div className="exerciseName h-full border-2 border-slate-200 p-3 mb-3 glassBg text-white" key={x.name}>
        <h2 className='font-bold text-xl italic'>{x.name}</h2>
        <li className='my-3'><b>muscle:</b> {x.muscle}</li>
        <li   className='my-3'><b> equipment:</b> {x.equipment}</li>
        <li  className='my-3'><b>difficulty:</b> {x.difficulty}</li>
        <li className='my-3'><b>instructions:</b> {x.instructions}</li>
        </div>)}
      
      </div>
      </div>
     

    </div>
  )
}
