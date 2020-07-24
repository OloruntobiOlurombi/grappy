import React from 'react'
import Home from './components/Home'
import { Switch, Route} from "react-router-dom";
const Appa = () => {
 return (
  <div>
   <Switch>
    <Route exact path='/home' component={Home} />
   </Switch>
  </div>
 )

 
}

export default Appa;
