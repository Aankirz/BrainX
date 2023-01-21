
import React,{useState,useEffect} from 'react'
import axios from 'axios';


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

 //a7grb3KnXvkvE4JVPIDNokANeca8TJIh3x1vPKov
  return (
    <div className="PhysicalFitness">
      <h1>BrainX</h1>
      <input type="text" onChange={e=>setMuscle(e.target.value)} />
     {exercises.map(x=><h2 key={x.name}>{x.name}</h2>)}
    </div>
  )
}
