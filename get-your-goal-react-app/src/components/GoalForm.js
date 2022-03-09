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
    <h1 className='text-center ' col="35" rows="1">{isAdd ? "Add" : "Edit"} Goal</h1>
    <form className='text-center' onSubmit={handleSubmit}>
        <div className='mb-5'>
            <label htmlFor='goalTitle'>Goal Title</label>
            <input type="text" name="goalTitle"  className='form-control'
                   value={goal.goalTitle} onChange={handleChange} />
            </div>
        <div className='mb-8'>
            <label htmlFor='goal'>Goal Text</label>
            </div>
        <div className='mb-8'>
            <textarea name="goal" cols="50" rows="2" value={goal.goal} onChange={handleChange} />
            </div>
            <div className='mb-8'>
            <label htmlFor='userName'>Created By (UserName) : </label>
            </div>
        <div className='mb-8'>
            <textarea name="userName" cols="40" rows="1" value={goal.userName} onChange={handleChange} />
            </div>
            <div className='mb-8'>
        <label htmlFor='comment'>Comment : </label>
        </div>
        <div className='mb-8'>
            <textarea name="comment" cols="50" rows="2" value={goal.comment} onChange={handleChange} />
            </div>
        <div className='mb-8'>
            <button className='btn btn-primary mr-3' type="submit" onClick={handleSubmit}>Save</button>
            <button className='btn btn-secondary' type="button" onClick={() => notify({ action: "cancel" })}>Cancel</button>
            </div>
        </form>
    </>
  )
}

export default GoalForm;