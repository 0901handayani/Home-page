import React from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './Container/home';

class Component extends React.Component{
  render(){
   return( 
     <Switch>
       <Route path="/" exact component={home} />
     </Switch>
   )
  }
}
export default Component;