import React from 'react'

import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Spieces from '../apps/Spieces'



// import Resources from '../site/Resources'
// import FunctionalComponentDemo from '../../concepts/FunctionalComponentDemo'
// import JSXRules from '../../concepts/JSXRules';
// import State from '../../concepts/State';
// import Effects from '../../concepts/Effects';
// import PropsDemo from '../../concepts/PropsDemo';
// import Hooks from '../../concepts/Hooks';



const Sidebar = () => (

  <div className="sidebar">
    <div className="sidebar-list-styling">
      <ul className="sidebar-list list-unstyled">
      {/* <li><Link to="/">Spieces</Link></li> */}
      {/* <li><Link to="/functionalcomponent">Functional Component</Link></li>
      <li><Link to="/jsxrules">JSX Rules</Link></li>
      <li><Link to="/state">useState</Link></li>
      <li><Link to="/effects">useEffect</Link></li>
      <li><Link to="/resources">Resources</Link></li>
      <li><Link to="/propsdemo">Props Demo</Link></li>
      <li><Link to="/Hooks">Hooks</Link></li> */}



      </ul>
    </div>
    <div className="sidebar-route" style = {{width: 50}} >
    <Switch >
    <Route exact path="/"><Spieces /></Route>
  <Route exact path="/Spieces"><Spieces /></Route>
  {/* <Route exact path="/resources"><Resources /></Route>
 
  <Route exact path="/jsxrules"><JSXRules /></Route>
  <Route exact path="/functionalcomponent"><FunctionalComponentDemo/></Route>
  <Route exact path="/state"><State/></Route>
  <Route exact path="/effects"><Effects/></Route>
  <Route exact path="/propsdemo"><PropsDemo/></Route>
  <Route exact path="/Hooks"><Hooks/></Route> */}

</Switch>
    </div>
  </div>

)

export default Sidebar;