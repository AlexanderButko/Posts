import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context";
import MyButton from "../UI/Button/MyButton";

const Navbar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.setItem('isAuth', 'false');

    }

    return (
            <div className="navbar">
                <MyButton onClick = {logout}>Выйти</MyButton>
                <div className="navbar-items">
                    <Link to="/about">О проекте</Link>
                    <Link to="/posts">Посты</Link>
                </div>
            </div>
    );
};

export default Navbar;