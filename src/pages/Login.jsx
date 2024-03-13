import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/Button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [credentials, setCredentials]  = useState({login : '', password : ''});


    function authentication () {

        if(credentials.login === 'admin' && credentials.password === 'qwerty'){
            setIsAuth(true);

            localStorage.setItem('isAuth','true');
            setCredentials({...credentials, login : '', password : ''})
        }
    }

    return (
        <div>
            <MyInput onInput = { e => setCredentials({...credentials, login : e.target.value})}
                     type="text"
                     placeholder="Введите логин"
            />
            <MyInput
                onInput = { e => setCredentials({...credentials, password : e.target.value})}
                type="password"
                placeholder="Введите пароль"
            />
            <MyButton onClick = {authentication}>Войти</MyButton>
        </div>
    );
};

export default Login;