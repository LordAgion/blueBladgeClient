import React, {useState, useEffect} from 'react';
import { Container, Badge, Button, Input, Label } from 'reactstrap';
import {Redirect} from 'react-router-dom';

import SingleSpeices from './singleSpeices'

import '../apps/embedBox.css'
import '../apps/apperanceBox.css'
import '../apps/traits/hover.css'
import './List.css'



let data
const SpiecesList = (props, id) =>{
    let [spiecesData, setSpiecesData] = useState([])
    let [redirect, setRedirect] = useState (true)
    let [state, seState] = useState (0)
    
    
    useEffect(()=> {
        fetchSpeices()
      },[])
  
      let fetchSpeices = () => {

    fetch (`https://speciescatalog.herokuapp.com/speices/${props.id}`,  {
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


    let applyState = (j, h) =>{
        // console.log ("j", j)
        // console.log ("h", h)
        

setTimeout(function() {
  fetchSpeices()
  props.tokenHandler(j)
  props.applyHoldOver(h)
}, 100);
        
    }

    let makeCreate = (e,f) =>{
        e.preventDefault()

         
         return props.tokenHandler(f)
    }
    if (props.state == 7 ) {
        
        fetchSpeices()
        props.tokenHandler(5)

         
    }

    if (props.state == 5 ) {
        
        fetchSpeices()
        props.tokenHandler(3)

         
    }

    if (props.state == 3 || state == 3 ) {
        
        fetchSpeices()
        
        props.tokenHandler(1)

         
    }

return(

<div  Id = 'slot'>
{redirect ? <Redirect to ='/allSpecies'/>:null}

        <div>
        <button Id= "overide2" type="submit" onClick={(e) => makeCreate(e,2)} >
            <h1>Create Species</h1></button>
        </div>

        {spiecesData.map((pie, index) => {
            
            return (  <SingleSpeices pie={pie} index = {index} tokenHandler = {applyState}/>)
                                
                            })}
    


</div>)
}

export default SpiecesList;