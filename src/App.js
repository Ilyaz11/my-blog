import React from "react";
import "./App.css";
import Title from "./components/Title/Title";
import Img from "./components/Img/Img";
import Comments from "./components/Comments/Comments";

const App = () => {
    return(
        <div className="container">
            <Title/>
            <Img/>
            <Comments/>
        </div>
    )

}

export default App;