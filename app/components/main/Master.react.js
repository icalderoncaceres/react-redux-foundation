/* import dependencies */
import React from 'react';
import {BrowserRouter as Router, Link, Route } from 'react-router-dom';

//Importar component
import Main from '../template/Main.react';

/*reac*/
class Master extends React.Component {

  //Contructor
  constructor() {
    //Call parent
    super();
  }

  /* Mpount view */
  render(){
    /*Create component*/
    return (
      <Router>
          <div>
            ajustes de new router
          </div>
      </Router>
     )
  }
}

//Export
export default Master;
