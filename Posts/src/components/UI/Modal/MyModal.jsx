import React from 'react';
import classes from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {
    const rootClasses = [classes.myModal];
    if (visible){
        rootClasses.push(classes.active);
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}> {/*Теперь добавление класса к контейнеру происходит только при установленном состоянии visible*/}
        {/* <div className={[classes.myModal,classes.active].join(' ')}> Такая хитрая конструкция нужна для добавления двух классов одновлеменно.*/}
            {/*Создаем пустой массив, добавляем в него два класса. Join вернет строку с двумя классами, разделитель пробел*/}
            {/*Для создания функционала сокрытия модального окна по добавлению поста/ клику по серой зоне изменили принцип добавления классов к контейнеру (см. выше)*/}
            {/*По клику на серой области (корневой div) обнуляем состояние видимости модального окна, тем самым закрывая его*/}
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {/*Однако, клик по модальному окну также приведет к его закрытию. Это происходит из за всплытия события click*/}
                {/*Cоответственно, останавливаем всплытие этого события. Теперь клик по модалке не приведет к ее закрытию*/}
                {children}{/*Коллекция детей-узлов, передаваемых в MyModule на ур-не app.js*/}
            </div>

        </div>
    );
};

export default MyModal;