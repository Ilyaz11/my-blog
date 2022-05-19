import React from 'react';
import stylesSection from "./ThirdSection.module.css"

const ThirdSection = () => {
    return (
        <div className={stylesSection.thirdSec}>
            <div>
                <h3 className={stylesSection.title}>Почему выбирают нас:</h3>
            </div>
            <div className={stylesSection.triggers}>
                <div className={stylesSection.firstTrigger}>
                    <img className={stylesSection.image} src="https://i.ibb.co/ZdrBYTy/Group-25.png" alt="Group-25"/>
                    <h4 className={stylesSection.secTitle}>Мгновенная доставка</h4>
                    <p className={stylesSection.textTrigger}>Доставим заказанную вами еду за 30 минут + напиток в подарок</p>
                </div>
                <div className={stylesSection.secondTrigger}>
                    <img className={stylesSection.image} src="https://i.ibb.co/4gMvDmB/Group-26.png" alt="Group-26"/>
                    <h4 className={stylesSection.freshFood}>Свежие продукты</h4>
                    <p className={stylesSection.textTrigger}>Вся продукция хранится в хороших условиях тем самым продливая срок хранения</p>
                </div>
                <div className={stylesSection.thirdTrigger}>
                    <img className={stylesSection.image} src="https://i.ibb.co/st39DGZ/Group-27.png" alt="Group-27"/>
                    <h4 className={stylesSection.uniqueMenu}>Уникальное меню</h4>
                    <p className={stylesSection.textTrigger}>Ежедневно мы обновляем наше меню и том числе коктейльное</p>
                </div>
                <div className={stylesSection.fourthTrigger}>
                    <img className={stylesSection.image} src="https://i.ibb.co/mqSgmBm/Group-29.png" alt="Group-29"/>
                    <h4 className={stylesSection.delivery}>Доставка</h4>
                    <p className={stylesSection.textTrigger}>Мы быстро доставляем вашу еду по указанному адресу</p>
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;