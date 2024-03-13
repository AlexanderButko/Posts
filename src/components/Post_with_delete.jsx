import React from 'react';
import MyButton from "./UI/Button/MyButton";
import {useNavigate} from "react-router-dom";

function Post_with_delete(props) {

    const route = useNavigate();
    return (
        <div className = "post">
            <div className = "post-content">
                <strong>{props.post.id}.{props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className = "post-button">
                <MyButton onClick = { () => props.remove(props.post)}>Delete post</MyButton>
                <MyButton onClick = { () => route( `/posts/${props.post.id}`)}>Open post</MyButton>
            </div>
        </div>
    );
}

export default Post_with_delete;