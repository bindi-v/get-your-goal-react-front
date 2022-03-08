import { useState } from 'react';

function GoalForm({ goal: initialGoal, notify }) {

    const [goal, setGoal] = useState(initialGoal);
    const isAdd = initialGoal.goalId === 0;

    function handleChange(event) {
        const clone = { ...goal };
        clone[event.target.name] = event.target.value;
        setGoal(clone);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const url = `http://localhost:8080/goals`;
        const method = isAdd ? "POST" : "PUT";
        const expectedStatus = isAdd ? 201 : 200;

        const init = {
            method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/Json"
            },
            body: JSON.stringify(goal)
        };

        fetch(url, init)
        .then(response => {
            if(response.status === expectedStatus) {
                if(isAdd) {
                    return response.json();
                }else {
                    return goal;
                }
            }
            return Promise.reject(`Didn't receive expected status: ${expectedStatus}`);
        })
        .then(result => notify({
            action: isAdd ? "add" : "edit",
            goal: result
        }))
        .catch(error => notify({ error: error }))
    }

  return (
      <>
    <div>GoalForm</div>
    <h1>{isAdd ? "Add" : "Edit"} Goal</h1>
    <form onSubmit={handleSubmit}>
        <div className='mb-5'>
            <label htmlFor='title'>Goal Title</label>
            <input type="text" id="title" name="title" className='form-control'
                   value={goal.title} onChange={handleChange} />
            </div>
        <div className='mb-8'>
            <label htmlFor='goal'>Goal Text</label>
            </div>
        <div className='mb-8'>
            <textarea name="goal" cols="35" rows="3" value={goal.goal} onChange={handleChange} />
            </div>
        <div className='mb-8'>
            <button className='btn btn-primary mr-3' type="submit">Save</button>
            <button className='btn btn-secondary' type="button" onClick={() => notify({ action: "cancel" })}>Cancel</button>
            </div>
        </form>
    </>
  )
}

export default GoalForm;