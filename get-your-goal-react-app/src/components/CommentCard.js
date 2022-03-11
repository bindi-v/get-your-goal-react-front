import React from 'react';

function CommentCard({ comment, subNotify }) {

    function handleDelete() {
        fetch(`http://localhost:8081/comments/${comment.commentId}`, { method: "DELETE" })
        .then(() => subNotify({ action: "delete-comment", comment: comment}))
        .catch(error => subNotify({ action: "delete-comment", error: error }));
    }

  return (
    <div className='row'>
        <div className='card'>
            <div className='card-body'>
                <h5>Comment: {comment.comment} </h5>
                <div className='card-footer' d-flex="true" justify-content-center="true">
                   <button className='btn btn-danger mr-3' type="button" onClick={handleDelete}>Delete</button>
                   <button className='btn btn-secondary' type="button" onClick={() => subNotify({ action: "edit-comment-form", comment: comment})}>Edit</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CommentCard;