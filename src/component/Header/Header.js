import React from "react";
import style from "./Header.module.css"
// import styleSection from "../FirstSection/FirstSection.module.css";

const Header = () => {
    return(
        <>
            <header className={style.header}>
                <div className={style.logo}>
                    <img src="https://i.ibb.co/h2MC8tN/logo.png" alt="logo"/>
                </div>
                <div className={style.topnav}>
                    <nav>
                        <a href="" className={style.home} >Главная</a>
                        <a href="" className={style.menu}>Меню</a>
                        <a href="" className={style.dos}>Доставка</a>
                        <a href="" className={style.contacts}>Контакты</a>
                        <a href="" className={style.tel}><img src="https://i.ibb.co/hKnRZNt/phone-1.png" alt="phone-1"/>+996500405988</a>
                        <a href="" className={style.corzina}><img src="https://i.ibb.co/Sw6zvZb/image.png" alt="image"/></a>
                    </nav>
                </div>

                <div className={style.title}>
                    <h2 className={style.dostavka}>Доставка вкусной еды до 30 минут + напиток в подарок!</h2>
                    <h6 className={style.sectitle}>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда свежим и ароматным</h6>
                    <button className={style.btn}>ПЕРЕЙТИ В МЕНЮ</button>
                </div>
                <div className={style.burger}>
                    <img className={style.drink} src="https://i.ibb.co/5TyJ8J8/Rectangle-12cola.png" alt="cola"/>
                    <img className={style.cena} src="https://i.ibb.co/D1tyk96/cena.png" alt="cena"/>
                    <img className={style.sburger} src="https://i.ibb.co/2nYYq6g/Rectangle-73burger.png" alt="burger"/>
                </div>
            </header>
        </>
    )
}

export default Header;