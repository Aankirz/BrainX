
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
    <div className="PhysicalFitness border-2 border-slate-200">

      <h1 className='italic text-4xl font-extrabold'>FitnessFreak</h1>
     <div className="searchBox border-2 border-slate-200">
     <input type="text" onChange={e=>setMuscle(e.target.value)} className='w-96 h-5 rounded-md '/>

     </div>

      <div className="exerciseContainer w-full h-5/6  flex  p-0.5 border-2 border-slate-200">
     
     <div className="bodyPart w-2/12 h-full flex flex-col items-start  border-2 border-slate-200">
      {
        muscleData.map(x =>  <li className='text-base font-normal' key={x.id}>{x.muscle}</li>)
      }
     
     
     </div>

     
      

      <div className="exerciseList w-8/12 h-full border-2 border-slate-200">
    
      {exercises.map(x=>  <div className="exerciseName h-full border-2 border-slate-200 py-px my-px" key={x.name}>
        <h2 >{x.name}</h2>
        <li>muscle:{x.muscle}</li>
        <li>equipment:{x.equipment}</li>
        <li>difficulty:{x.difficulty}</li>

        <li>instructions:{x.instructions}</li>
        </div>)}
      
      </div>
      </div>
     

    </div>
  )
}
