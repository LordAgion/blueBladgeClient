import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import SpiecesList from './components/site/SpeicesList'
import Spieces from './components/apps/Spieces'
import Auth from './components/Auth/Auth'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

const App = () => {
  const [ token, setToken] = useState(undefined) 
  const [ id, setid] = useState(undefined) 
  const [siteState, setSiteState] = useState(0)

  let applySiteState= (g) =>{
    setSiteState(g)
  }
    
  let storeSessionToken = (token, id) =>{
    setToken(token)
    setid(id)
    applySiteState(1)
    
    
    
  }
  return (
    <div>
      <div className="App">
        
        {!token ? <Auth tokenHandler = {storeSessionToken}/>  : null}
       {siteState == 1 ? <SpiecesList props = {token} id = {id}/>: null} 
       {siteState == 2 ? <Spieces props = {token} id = {id}/>: null}

       {/* <Spieces props = {token} id = {id}/> */}

    </div>
      


      {/* <Router>
        <Sidebar />
      </Router> */}
      
    </div>
  );
}

export default App;