import React from "react";
import{ BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Post from "./components/Pages/Post/Post";
import Main from "./components/Pages/Main/Main";

const App = () => {
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="post" element={<Post/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;