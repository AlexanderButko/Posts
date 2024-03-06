import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/Button/MyButton";
import {AuthContext} from "../context";
import Loader from "../components/UI/Loader/Loader";




const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [credentials, setCredentials]  = useState({login : '', password : ''});


   /* console.log(isAuth);*/
    console.log(credentials.login);
    console.log(credentials.password);


    function authentication () {

        if(credentials.login === 'admin' && credentials.password === 'qwerty'){
            setIsAuth(true);
            //Также добавим состояние в локальное хранилище, чтобы не потерять значение при перезагрузке страницы
            localStorage.setItem('isAuth','true');
            setCredentials({...credentials, login : '', password : ''})
        }
        //return isAuth;
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