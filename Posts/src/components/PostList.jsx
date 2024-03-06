import React from 'react';
import Post_props from "./Post_props";

const PostList = ({posts, title}) => {
    if (!posts.length){
       return ( <h1>Посты не найдены!</h1> );
    }
    return (
        <div>
            <h1 className='postTitle' >{title}</h1>
            {
                posts.map((post) =>
                    <Post_props post={post} key = {post.id}/>
                )
            }
        </div>
    )
};

export default PostList;