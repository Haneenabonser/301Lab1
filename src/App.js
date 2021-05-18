import React from 'react';
import Main from './components/Main.js';

class App extends React.Component {

  // constructor (props){
  //   super(props);
  //   this.state({
  //     dataArrar : data
  //   })
  // }

  constructor(props){
    super(props);
    this.state = {
      show : false
    }
  }



  render(){


    return(
      <>
      <Main/>



      </>

    )
}};

export default App;
