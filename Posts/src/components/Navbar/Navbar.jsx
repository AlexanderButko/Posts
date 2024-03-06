import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context";
import MyButton from "../UI/Button/MyButton";

const Navbar = () => {
    //Читаем состояние авторизации из контекста и используем его для кнопки разлогина
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.setItem('isAuth', 'false');

    }


    return (
            <div className="navbar">
                <MyButton onClick = {logout}>Выйти</MyButton>
                <div className="navbar-items">
                    {/* 21. Link - компонент React router dom, аналогичный <a>, но переход осущ без перезагрузки страницы */}
                    {/* 21. to - аналогично аттрибуту href*/}
                    <Link to="/about">О проекте</Link>
                    <Link to="/posts">Посты</Link>
                </div>
            </div>
    );
};

export default Navbar;