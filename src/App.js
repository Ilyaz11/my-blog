import React from "react";
import{ BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {Main, About, Products, Contacts, Post, NotFound, Posts} from "./Pages";
import "./App.css"

const func = () => (object) => object.isActive ? "active-link" : "";

const App = () => {
  return(
      <BrowserRouter>
          <nav className="nav">
              <ul>
                  <li>
                      <NavLink className={func()} to="/">Главная</NavLink>
                  </li>
                  <li>
                      <NavLink className={func()} to="/products">Продукты</NavLink>
                  </li>
                  <li>
                      <NavLink className={func()} to="/about">О нас</NavLink>
                  </li>
                  <li>
                      <NavLink className={func()} to="/contacts">Контакты</NavLink>
                  </li>
                  <li>
                      <NavLink className={func()} to="/posts">Пост</NavLink>
                  </li>
              </ul>
          </nav>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/posts" element={<Posts/>}/>
              <Route path="/post/:id" element={<Post/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App;