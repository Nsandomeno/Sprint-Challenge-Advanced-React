import React from 'react';

import './App.css';
import axios from 'axios';

import Display from './components/display.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    await axios.get('http://localhost:5000/api/players')
      .then(response => {
        // console.log('This is the response from App axios call:', response.data)
        this.setState({
          data: response.data
        })
      })
      .catch(error => {
        console.log('This is an error caught from app axios request:', error)
      })
  }


  render() {
    console.log("This is state set by axios call:", this.state.data)
  return (
    <div className="App">
      <Display playerData={this.state.data} />
    </div>
  );
  }
}

export default App;
