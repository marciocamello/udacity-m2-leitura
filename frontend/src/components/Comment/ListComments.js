import React from 'react';
import Comment from "./Comment";

const ListComments = props => {

    const {commentsPosts, onCommentVote} = props;

    return (
        <React.Fragment>
            {commentsPosts && commentsPosts.length > 0 && (
                <div>
                    <h1>Comments</h1>
                    {commentsPosts.map(comment => (
                        <Comment
                            key={comment.id}
                            comment={comment}
                            onCommentVote={onCommentVote}
                        />
                    ))}
                </div>
            )}
        </React.Fragment>
    )
};

export default ListComments;