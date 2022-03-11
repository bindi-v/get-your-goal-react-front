import React, { Component } from 'react'
import axios from 'axios';

export default class RandomGoal extends Component {

    state = { 
        randomGoal: ''
    };

    async componentDidMount() {
        // const response = await fetch('http://localhost:7979/randomGoals');
        // const body = await response.json();
        // this.setState({ randomGoal: body });
        this.fetchRandomGoal();
    }
    fetchRandomGoal = () => {
        axios.get('http://localhost:7979/randomGoals')
          .then((response) => {
              console.log(response);
            const  randomGoal1  = JSON.stringify(response.data);           
            // console.log(JSON.stringify(response.data));
            this.setState({randomGoal: randomGoal1});            
          })
          .catch((error) => {
            console.log(error);
          });
    }

  render() {
    //   const  { randomGoal }  = this.state.randomGoal;
      console.log( this.state.randomGoal);
    
    return (
    
      <div className='appRandom'>
          <div >
              <h3 className='heading'> 
              { this.state.randomGoal }
              </h3>
              <button className="buttonRandom" onClick=
                     { this.fetchRandomGoal }>
                        <span>Random Goal</span>
                    </button>
              </div>
          </div>
    );
  }
}
