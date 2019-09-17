import React, {useState, useEffect} from 'react';
import { Container, Badge, Button, Input, Label } from 'reactstrap';

import SingleSpeices from './singleSpeices'

import '../apps/embedBox.css'
import '../apps/apperanceBox.css'
import '../apps/traits/hover.css'
import './List.css'

let data
const SpiecesList = (props, id) =>{
    let [spiecesData, setSpiecesData] = useState([])

    useEffect(()=> {
        fetchSpeices()
      },[])
  
      let fetchSpeices = () => {

    fetch (`http://localhost:3001/speices/:${props.id}`,  {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },}
        )        
        .then(res => res.json())
        .then(data => {
            setSpiecesData(data)


            
            
        })
         .catch(err => console.error ({ message: err}))
    }



return(

<div  Id = 'slot'>

        <div>
        <button Id= "overide2"><h1>Create Speices</h1></button>
        </div>

        {spiecesData.map((pie, index) => {
            
            return (  <SingleSpeices pie={pie} index = {index}/>)
                                
                            })}
    


</div>)
}

export default SpiecesList;