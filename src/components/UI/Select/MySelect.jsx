import React from 'react';
import classes from './MySelect.module.css';

const MySelect = ({options, defaultOption, changer, value}) => {// options - массив опций вып списка, value - текущ значение select
    return (                                                    // changer - коллбэк sortPost - по изм значения select вызовется функция сортировки массива постов
        <select className={classes.mySelect}
                value={value} /*двуст связывание*/
                onChange={event => changer(event.target.value)} /*двуст связывание*/
        >
            <option disabled>{defaultOption}</option>
            {options.map( option =>
                <option key = {option.value} value= {option.value}> {/*Для каждго объекта опции из массива опций, передаваемых в компонент отрисовать опцию с аттрибутом value*/}
                    {option.name} {/*взятым из поля value объекта опции. В тело тега помещаем поле name */}
                    {/* key = {option.value} ключ передаем не отдельным полем (напр id), а value, т.к. value в select всегда уникален. Просто сократили число полей объекта option для удобства*/}
                </option>
            ) }
        </select>
    );
};

export default MySelect;