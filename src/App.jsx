import { useState } from 'react'
import {puppyList} from './data.js'
import './APP.css'


function App() {
  const [featPupId, setFeatPupId] = useState(null);
  const [puppies, setPuppies] = useState(puppyList);
  console.log("puppyList: ", puppyList);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);



  return (
    <div className="App">
      <h1>Puppy Pals</h1>
      {
        puppies.map((puppy) => {
            return <p onClick={()=>(setFeatPupId(puppy.id))} key={puppy.id}>{puppy.name}</p>
              {puppy.name}
            
             
           })
       }
       { featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
            <li>Owner Id: {featuredPup.ownerId}</li>
            <li>Is Cute: {featuredPup.isCute}</li>
            
          </ul>
        </div>
       )}
    </div>
  ); 
}  
export default App

