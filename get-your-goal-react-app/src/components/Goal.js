import { useState, useEffect } from 'react';
import GoalCard from './GoalCard';
import GoalForm from './GoalForm';
import GoalDetailsForm from './GoalDetailsForm';

function Goal() {

    const [goals, setGoals] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [showDetailsForm, setShowDetailsForm] = useState(false);
    const [scopedGoal, setScopedGoal] = useState({});
    const [error, setError] = useState();

    useEffect(() => {
        fetchFromAPI();
    }, []);

    function fetchFromAPI() {
        fetch("http://localhost:8080/goals")
        .then(response => response.json())
        .then(result => { console.log(JSON.stringify(result)); setGoals(result); })
        .catch(console.log(error));
    }

    function addClick() {
        setScopedGoal({ goalId: 0, goalTitle: "", goal: "", username: ""});
        setShowForm(true);
    }

    function notify({ action, goal, error }) {
        if(error) {
            setError(error);
            setShowForm(false);
            setShowDetailsForm(false);
            return;
        }

    // eslint-disable-next-line default-case
    switch(action) {
        case "add":
            setGoals([...goals, goal]);
            break;
        case "edit":
            setGoals(goals.map(e => {
                if(e.goalId === goal.goalId) {
                    return goal;
                }
                return e;
            }));
            break;
        case "edit-form":
            setScopedGoal(goal);
            setShowForm(true);
            return;
        case "details":
            setScopedGoal(goal);
            setShowDetailsForm(true);
            return;
        case "delete":
            setGoals(goal.filter(e => e.goalId !== goal.goalId));
            break;
        case "exit-details-form":
            fetchFromAPI();
            break;
    }

    setError("");
    setShowForm(false);
    setShowDetailsForm(false);
    }

    if(showForm) {
        return <GoalForm goal={scopedGoal} notify={notify} />
    } else if(showDetailsForm) {
        return <GoalDetailsForm goal={scopedGoal} notify={notify} />
    }


  return (
      <>
    <div className='row mt-2'>
        <div className='col-8'>
            <h1>Goals</h1>
            </div>
        <div className='col'>
            <button className='btn btn-primary' type="button" onClick={addClick}>Add a Goal</button>
            </div>
        </div>
        {error && <div className='alert alert-danger'>{error}</div>}
        {goals.length === 0 ? <div className='alert alert-warning'>No Goals</div>
           : (<div className='row row-cols-3'>
               {goals.map(g => <GoalCard key={g.goalId} goal={g} notify={notify} />)}
               </div>)}
    </>
  )
}

export default Goal;