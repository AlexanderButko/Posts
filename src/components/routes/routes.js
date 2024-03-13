import About from "../../pages/About";
import PostIdPage from "../../pages/PostIdPage";
import {Navigate, useRoutes} from "react-router-dom";
import React from "react";
import Posts from "../../pages/Posts";
import Login from "../../pages/Login";
import Error from "../../pages/Error";

export function ProtectRouter() {
    const element = useRoutes([
        {path: "/about", element: <About/>},
        {path: "/posts", element: <Posts/>},
        {path: "/posts/:id", element: <PostIdPage/>},
        {path: "/", element: <Navigate replace to='/posts'/>},
        {path: "/*", element: <Navigate replace to='/error'/>},
        {path: "/login", element: <Navigate replace to='/posts'/>},
        {path: "/error", element: <Error/>}
    ]);
    return element;
}

export function PublicRouter() {
    const element = useRoutes([
        {path: "/about", element: <About/>},
        {path: "/posts", element: <Navigate replace to='/login'/>},
        {path: "/posts/:id", element: <Navigate replace to='/login'/>},
        {path: "/", element: <Navigate replace to='/login'/>},
        {path: "/*", element: <Navigate replace to='/error'/>},
        {path: "/login", element: <Login/>},
        {path: "/error", element: <Error/>}
    ]);
    return element;
}
