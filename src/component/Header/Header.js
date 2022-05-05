import React from "react";

const Header = () => {
    return(
        <header>
            <div className="logo">
                <img src="picture/logo.png" alt=""/>
            </div>
            <nav>
                <div className="topnav">
                    <a href="">Главная</a>
                    <a href="">Меню</a>
                    <a href="">Доставка</a>
                    <a href="">Контакты</a>
                    <h6>+996500405988</h6>
                </div>
            </nav>
        </header>
    )
}

export default Header;