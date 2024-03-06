import React, {useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";

const PostForm12 = ({props}) => {
    const [post2, setPost2] = useState({title : '', body : ''});
    const [postCounter2, setPostCounter2] = useState(10);
    const PostAddition2 = (e) => {
        e.preventDefault();
        const newPost = {
            ...post2,
            id: postCounter2
        };
        props(newPost);
        setPostCounter2(postCounter2 + 1);
        setPost2({title: '', body: '' });
    }
    return (
        <div>
            <form>
                <MyInput
                    onChange = { e => setPost2({...post2, title : e.target.value})}
                    type ='text'
                    placeholder = 'Очищаемый инпут. Заголовок'
                    value = {post2.title}
                />
                <MyInput

                    onChange = { e => setPost2({...post2, body : e.target.value})}
                    type ='text'
                    placeholder = 'Очищаемый инпут. Тело поста'
                    value = {post2.body}
                />
                <MyButton onClick={PostAddition2} >Add</MyButton>
            </form>
        </div>
    );
};

export default PostForm12;