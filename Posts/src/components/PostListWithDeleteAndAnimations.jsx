import React from 'react';
import Post_with_delete from "./Post_with_delete";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostListWithDeleteAndAnimations = ({posts, title, remove}) => { /*Добавили коллбэк remove к списку параметров PostList*/
    if (!posts.length){
        return ( <h1>Посты не найдены!</h1> );
    }
    return (
        <div>
            <h1 className='postTitle' >{title}</h1>
            <TransitionGroup>
            {
                posts.map((post) =>
                    <CSSTransition
                        key = {post.id}
                        timeout={500}
                        classNames = "post"
                    >{/* classNames - классовое имя для стилей в app.css (напр. post-enter-active*/}
                        <Post_with_delete post={post} key = {post.id} remove={remove}/>
                    </CSSTransition>
                )

            }
            </TransitionGroup>
        </div>
    )
};

export default PostListWithDeleteAndAnimations;