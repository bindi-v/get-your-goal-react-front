import React from 'react'

function GoalCard({ goal, notify }) {

    function handleDelete() {
        fetch(`http://localhost:8080/goals/${goal.id}`, { method: "DELETE"})
        .then(() => notify({ action: "delete", goal: goal }))
        .catch(error => notify({ action: "delete", error: error }));
    }

  return (
      <>
    <div className='row'>
        <div className='card'>
            <div className='card-body'>
                <h5>Title: {goal.goalTitle}</h5>
                <h5>Goal: {goal.goal}</h5>
                <h6>Created By : {goal.userName}</h6>
                <div className='card-footer' d-flex="true" justify-content-center="true">
                <button className='btn btn-danger mr-3' type="button" onClick={handleDelete}>Delete</button>
                <button className='btn btn-secondary mr-2' type="button" onClick={() => notify({ action: "edit-form", goal: goal })}>Edit</button>
                <button className='btn btn-secondary mr-2' type="button" onClick={() => notify({ action: "comment", goal: goal.comment })}>Comment</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default GoalCard;