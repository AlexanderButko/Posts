import React from 'react';
import classes from './MyButton.module.css'; // classes - импорт стилей кнопки

                                            //осущ деструктуризацию входных параметров объекта props на children и остат параметры ...props
const MyButton = ({children,...props}) => { // props - значение аттрибутов, которые мы передадим в пользовательский компонент кнопки
    return (                                // children - props.children - св-во props - коллекция, хранящая узлы внутри <MyButton><MyButton/>
        <button {...props} className={classes.myBtn}> {/*а так созданный стиль применяется к кнопке*/}
                                                        {/* {...props} - разворачиваем коллекцию аттрибутов в button, которые мы передадим в MyButton из App.js*/}
                                                        {/*Соотв вот для чего нужна была деструктуризация - чтобы вынести children и не передавать их в button*/}
            {children} {/* Что мы поместили в <MyButton></MyButton>?  Create post*/}
        </button>
    );
};

export default MyButton;