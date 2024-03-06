import React from 'react';
import classes from './MyInput.module.css';

const MyInput = (props) => { /*почему здесь не деструктуриз, как в MyButton? Ну а какие children могут быть у input*/
    return (
        <input className={classes.myInput} {...props}/>//classes.myInput - применение стиля из MyInput.module.css
    );                                                 //Почему className, а не class, как в обычном HTML? Потому что ключ слово class в JS зарезервировано под создание классов
};

export default MyInput;