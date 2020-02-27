import React from 'react';
import './CommentList.css';
import { useSubscription } from '../hooks/useSubscription';

const CommentList = ({ postId }) => {
    const comments = useSubscription((ds) => ds.getComments(postId));
    if (!comments)
        return null;

    return (
        <div>
            {comments.map((comment) => (
                <div key={comment.id} className="comment">
                    {comment.comment}
                </div>
            ))}
        </div>
    );
};

export default CommentList;