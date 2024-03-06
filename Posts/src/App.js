import React, {useEffect, useState} from 'react';

import './styles/app.css';
import {BrowserRouter, Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Posts from "./pages/Posts";
import {ProtectRouter} from "./components/routes/routes.js";
import {PublicRouter} from "./components/routes/routes.js";
import {AuthContext} from "./context/index.js"
import Loader from "./components/UI/Loader/Loader";




function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    console.log(isAuth);
    console.log(localStorage.getItem('isAuth'));
    //Используем локальное хранилище для хранения состояния авторизации, чтобы при перезагрузке страницы автоматом не разлогиниваться
   useEffect(() => {
        if (localStorage.getItem('isAuth')==='true'){
            setIsAuth(true);
        }
        setIsLoading(false);
    }, []);

    if (isLoading){
        return <Loader/>
    }

    return (
        /*Все приложение оборачиваем в созданный контекст*/
        /*В качестве аргументов компонента  контекста используем те состояния, которые хотим вызывать в дочерних компонентах*/
        <AuthContext.Provider
            value = {{
                isAuth,
                setIsAuth,
                //isLoading
            }}
        >
            <BrowserRouter>
                {/*21.BrowserRouter - компонент реализующий роутинг, отслеживающий изм пути и выполняющий перерисовку*/}
                <Navbar/>


                {
                    isAuth
                        ? <ProtectRouter/>
                        : <PublicRouter/>
                }
            </BrowserRouter>
        </AuthContext.Provider>
  );
}

export default App;
