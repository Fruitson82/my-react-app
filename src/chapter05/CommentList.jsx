import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "한광식",
        comment: "아빠가 최고야!",
    },
    {
        name: "양한나",
        comment: "엄마가 최고야!",
    },
    {
        name: "한소망",
        comment: "내가 최고야!",
    },
]


function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                )
            })}
        </div>
    )
}

export default CommentList;