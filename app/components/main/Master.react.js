/* import dependencies */
import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

/* reac */
class Master extends React.Component {

  //Contructor
  constructor() {
    //Call parent
    super();
  }

  /* Mpount view */
  render() {
    /* Create component */
    return (<Router>
      <section className="section">
        <div className="container">
          <h1 className="title">
            
            <small> Welcome to </small>  React Ethereal
          </h1>
          <p className="subtitle">
            My first website with <strong>React</strong>!
          </p>
        </div>
      </section>
    </Router>)
  }
}

//Export
export default Master;
