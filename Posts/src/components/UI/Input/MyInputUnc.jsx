import React from 'react';
import classes from './MyInput.module.css';

const MyInputUnc = React.forwardRef((props,ref) => { /* В отличии от управляемыого компон здесь вызывается функция React.forwardRef*/
    return (                                                                      /*благодаря этому мы можем принимать в компонент ссылку, созд через useRef*/
        <input ref = {ref} className={classes.myInput} {...props}/> /*используем ссылку и тем самым возвращаем DOM - элемент input*/
    );
});

export default MyInputUnc;