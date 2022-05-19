import React from 'react';
import styleFooter from "./Footer.module.css"
import style from "../Header/Header.module.css";

const Footer = () => {
    return (
        <div className={styleFooter.footer}>
            <div className={styleFooter.logo}>
                <img src="https://i.ibb.co/xYh5h8k/LOgo.png" alt="LOgo"/>
            </div>
            <div className={styleFooter.cap}>
                <nav className={styleFooter.nav}>
                    <ul className={styleFooter.ul}>
                        <a href=""><li className={styleFooter.home}>Главная</li></a>
                        <a href=""><li className={styleFooter.menu}>Меню</li></a>
                        <a href=""><li className={styleFooter.delivery}>Доставка</li></a>
                        <a href=""><li className={styleFooter.contacts}>Контакты</li></a>
                        <a href=""><li className={styleFooter.tel}>+996500405988</li></a>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Footer;