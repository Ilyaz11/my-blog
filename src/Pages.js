import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {POSTS} from "./constants";

export const Main = () => {
    return <h1 className="title">Главная страничка</h1>
}

export const Products = () => {
    return <h1 className="title">Наши продукты</h1>
}

export const About = () => {
    return <h1 className="title">О нас</h1>
}

export const Contacts = () => {
    return <h1 className="title">Контакты</h1>
}

export const Post = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});

    const getPost = () => {
        const post = POSTS.find(item => item.id === parseInt(id));
        setPost(post);
    }

    useEffect(() => {
        getPost();
    },[])

    return (
        <div className="post">
            <h1 className="title">{post.title}</h1>
            <p>{post.desc}</p>
        </div>
    )
}

export const Posts = () => {
    return (
        <div className="posts">
            <h1 className="title">Все посты</h1>
            <ul>
                {
                    POSTS.map(item => {
                        return <li key={item.toString()}><Link to={`/post/${item.id}`}>{item.title}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}




export const NotFound = () => {
    return <h1 className="title">Страничка не найдена. <Link to="/">Перейти на главную</Link></h1>
}

