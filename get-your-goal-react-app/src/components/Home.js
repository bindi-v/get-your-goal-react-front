import React, { Component } from 'react';

class Home extends Component {
    state = {
        isLoading: true,
        goals: []
    };

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/goals');
        const body = await response.json();
        this.setState({ goals: body, isLoading: false});
    }

    render() {
        const {goals, isLoading} = this.state;
        if(isLoading) {
            return <p>Loading...</p>;
        }
    
  return (
    <div className='row text-center'>
    <header className='card'>
        <div className='card-body'>
            <h2>Goal List</h2>
            {goals.map(goal =>
                <div key={goal.id}>
                {goal.goalTitle}
                <p>{goal.goal}</p>
                <p className='card-footer'>Created By : {goal.userName}</p>
                </div>
                    )}
            </div>
        </header>
    </div>
  );
 }
}

export default Home;