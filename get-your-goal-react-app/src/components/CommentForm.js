import { useState } from 'react';

function CommentForm({ comment: initialComment, subNotify}) {

    const [comment, setComment] = useState(initialComment);
    const isAdd = initialComment.commentId === 0;

    function handleChange(event) {
        const clone = { ...comment };
        clone[event.target.name] = event.target.value;
        setComment(clone);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const url = `http://localhost:8081/comments`;
        const method = isAdd ? "POST" : "PUT";
        const expectedStatus = 200;

        const init = {
            method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(comment)
        };

        fetch(url, init)
        .then(response => {
            if(response.status === expectedStatus) {
                if(isAdd) {
                    return response.json();
                }else {
                    return comment;
                }
            }
            return Promise.reject(`Didn't receive expected status: ${expectedStatus}`);
        })
        .then(result => subNotify({
            action: isAdd ? "add-comment" : "edit-comment",
            comment: result
        }))
        .catch(error => subNotify({ error: error }));
    }

  return (
      <>
    <h1>{comment.commentId > 0 ? "Edit" : "Add"} Comment</h1>
    <form onSubmit={handleSubmit}>
        <div className='mb-8'>
            <label htmlFor='comment'>Comment text</label>
            </div>
            <div className='mb-8'>
                <textarea name="comment" cols="40" rows="3" value={comment.comment} onChange={handleChange} />
                </div>
            <div className='mb-8'>
                <button className='btn btn-primary mr-3' type="submit">Save</button>
                <button className='btn btn-secondary' type="button" onClick={() => subNotify({ action: "cancel" })}>Cancel</button>
                </div>
        </form>
    </>
  )
}

export default CommentForm;