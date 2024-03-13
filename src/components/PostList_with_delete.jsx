import React from 'react';
import Post_with_delete from "./Post_with_delete";

const PostList_with_delete = ({posts, title, remove}) => { /*Добавили коллбэк remove к списку параметров PostList*/
    if (!posts.length){
        return ( <h1>Посты не найдены!</h1> );
    }
    return (
        <div>
            <h1 className='postTitle' >{title}</h1>
            { 
                posts.map((post) =>
                    <Post_with_delete post={post} key = {post.id} remove={remove}/>
                )
            }
        </div>
    )
};

export default PostList_with_delete;