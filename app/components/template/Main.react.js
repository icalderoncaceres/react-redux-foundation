/* Main react */
import React from 'react';

/* create first app */
class Main extends React.Component {

  //Main constructor
  constructor() {
    //Call parent
    super();

    this.state = {
      count: 0
    }
  }

  /* Component did mount */
  componentDidMount() {
    //Set interval
    setInterval(() => {
      //Set State
      this.setState((prevState, props)=> ({
        count: prevState.count + 1
      }));
    }, 1000)
  }

  /* render */
  render() {
    return (<div>
      Count: {this.state.count}
    </div>);
  }
}

/* another class*/
class Secondary extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>Soy secundario</div>
    )
  }
}


//Export class
export {Main as default, Secondary};
