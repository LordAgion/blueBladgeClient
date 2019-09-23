import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import SpiecesList from './components/site/SpeicesList'
import Spieces from './components/apps/Spieces'
import Auth from './components/Auth/Auth'
import SingleSpeicesPlus from './components/site/singleSpeicesPlus'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Redirect} from 'react-router-dom';

const App = () => {
  const [ token, setToken] = useState(undefined) 
  const [ id, setid] = useState(undefined) 
  const [siteState, setSiteState] = useState(0)
  const [holdOver, setHoldOver] = useState(0)

  let applySiteState= (g) =>{
    setSiteState(g)
  }

  let applyHoldOver= (h) =>{
    setHoldOver(h)
  }
    
  let storeSessionToken = (token, id) =>{
    setToken(token)
    setid(id)
    applySiteState(1)

  }

  let logout = () =>{
    setToken(undefined)
    setid(undefined)
    setSiteState(0)
   

  }

  let deleteAccount = (e) =>{
    e.preventDefault()
    console.log(id)
 fetch(`https://speciescatalog.herokuapp.com/all/${id}`, {
     method: 'DELETE',
     headers: {
         'Content-Type': 'application/json'
     }

 }
 ).then( fetch(`https://speciescatalog.herokuapp.com/auth/${id}`, {
  method: 'DELETE',
  headers: {
      'Content-Type': 'application/json'
  }

}
))
 .then(logout())
}
  return (
    <div>
      <React.Fragment><Router><Switch>
        
        
        
      
      <div className="App">
        
        {!token ? <Auth tokenHandler = {storeSessionToken}/>  : null}
       {siteState == 1 || siteState == 3 || siteState == 5 || siteState == 7  ? <SpiecesList props = {token} id = {id} state={siteState} tokenHandler = {applySiteState} applyHoldOver ={applyHoldOver}/>: <Redirect to ='/'/>} 
       {siteState == 2 ? <Spieces props = {token} id = {id}   tokenHandler = {applySiteState}/>: <Redirect to ='/'/>}
       {siteState == 4 ? <SingleSpeicesPlus props = {holdOver}  tokenHandler = {applySiteState}/>: <Redirect to ='/'/>}



       <div></div>
       

       {/* <Spieces props = {token} id = {id}/> */}
       
    </div>
    </Switch></Router></React.Fragment>
      
    <div className ="topMenu"> 
    {token ? <button Id = "overide3"  type="submit" onClick={(e) => logout(e)} >Log Out</button>   : null}
    {token ? <button Id = "overide5"  type="submit" onClick={(e) => deleteAccount(e)} >Delete Account</button>  : null}
    <div className = 'logo'>
    <img src = 'https://www.paradoxplaza.com/on/demandware.static/-/Sites-paradox-catalog/default/dw9e7a8f08/01-product-assets/stellaris/st-base-game-logo-v2.png' alt = '' height = '90 px'></img>
    </div>

    </div>
    

      {/* <Router>
        <Sidebar />
      </Router> */}
      
    </div>
  );
}

export default App;