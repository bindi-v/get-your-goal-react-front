import { useState } from 'react';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

function GoalDetailsForm({ goal: initialGoal, notify }) {

    const [ goal, setGoal] = useState(initialGoal);
    const [comment, setComment] = useState(initialGoal.comment);
    const [showCommentForm, setShowCommentForm] = useState(false);
    const [scopedComment, setScopedComment] = useState({});
    const [error, setError] = useState();

    function addCommentClick() {
        setScopedComment({ commentId: 0, goalId: goal.goalId, comment: ""});
        setShowCommentForm(true);
    }

    function detailsFormNotify({ action, comment, error }) {
        if(error) {
            setError(error);
            setShowCommentForm(false);
            return;
        }
        //eslint-disable-next-line default-case
        switch(action) {
            case "add-comment":
                setComment([...comment, comment]);
                break;
            case "edit-comment":
                setComment(comment.map(e => {
                    if(e.commentId === comment.commentId) {
                        return comment;
                    }
                    return e;
                }));
                break;
            case "edit-comment-form":
                setScopedComment(comment);
                setShowCommentForm(true);
                return;
            case "delete-comment":
                setComment(comment.filter(e => e.commentId !== comment.commentId));
                break;
        }
        setError("");
        setShowCommentForm(false);

        if(showCommentForm) {
            return <CommentForm comment={scopedComment} subNotify={detailsFormNotify} />

        }
    }

  return (
      <>
    <h1>Goal Details</h1>
    {error && <div className='alert alert-danger'>{error}</div>}
    <div className='row mt-2'>
    <div className='col-8'>
        <h2>Comments</h2>
        </div>
        </div>
    <div className='col'>
        {<button className='btn btn-primary' type="button" onClick={addCommentClick}>Add a Comment</button>}
        </div>
        {comment.length === 0 ? <div className='alert alert-warning'>No Comments</div>
          : (<div className='row row-cols-3'>
              {comment.map(x => <CommentCard key={x.commentId} comment={x} subNotify={detailsFormNotify} />)}
              </div>)}
    </>
  );
}

export default GoalDetailsForm;