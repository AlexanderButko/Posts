import React, {useState} from 'react';

function Post_props(props) {
    return (
        <div className = "post">
            <div className = "post-content">
                <strong>{props.post.id}.{props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className = "post-button"></div>
           <button>Public post</button>

        </div>
    );
}

export default Post_props;