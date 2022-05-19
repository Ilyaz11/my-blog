import React from 'react';
import styleSection from "./FirstSection.module.css"
const FirstSection = () => {
    return (
        <>
            <div>
                <div className={styleSection.elem}>
                    <h4 className={styleSection.new}>Новинки</h4>
                </div>
                <div className={styleSection.elem2}>
                    <a href="" className={styleSection.pizza}>Пицца</a>
                    <a href="" className={styleSection.burger}>Бургер</a>
                    <a href="" className={styleSection.sushi}>Суши</a>
                    <a href="" className={styleSection.rolls}>Роллы</a>
                    <a href="" className={styleSection.salads}>Салаты</a>
                    <a href="" className={styleSection.desserts}>Десерты</a>
                    <a href="" className={styleSection.drinks}>Напитки</a>
                </div>
                <div className={styleSection.group}>
                    <div className={styleSection.oneGroup}>
                        <img className={styleSection.chiz} src="https://i.ibb.co/LSdtKz5/Tofu-Burger-PNG-Image-2burger.png" alt="burger"/>
                        <h3 className={styleSection.chizTitle}>Чизбургер</h3>
                        <p className={styleSection.chizText}>Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                        <h3 className={styleSection.price}>200 сом</h3>
                        <button className={styleSection.decrease}>-</button>
                        <input type="text" value="1" className={styleSection.input}/>
                        <button className={styleSection.increase}>+</button>
                        <button className={styleSection.btn}>В карзину</button>
                    </div>
                    <div className={styleSection.secGroup}>
                        <img className={styleSection.chiz} src="https://i.ibb.co/986T0TT/Tofu-Burger-PNG-Image-1.png" alt="Burger"/>
                        <h3 className={styleSection.chizTitle}>Чизбургер</h3>
                        <p className={styleSection.chizText}>Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                        <h3 className={styleSection.price}>200 сом</h3>
                        <button className={styleSection.decrease}>-</button>
                        <input type="text" value="1" className={styleSection.input}/>
                        <button className={styleSection.increase}>+</button>
                        <button className={styleSection.btn}>В карзину</button>
                    </div>
                    <div className={styleSection.thirdGroup}>
                        <img className={styleSection.chiz} src="https://i.ibb.co/DY0BmSx/Tofu-Burger-PNG-Image-1-1.png" alt="Burger"/>
                        <h3 className={styleSection.chizTitle}>Чизбургер</h3>
                        <p className={styleSection.chizText}>Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                        <h3 className={styleSection.price}>200 сом</h3>
                        <button className={styleSection.decrease}>-</button>
                        <input type="text" value="1" className={styleSection.input}/>
                        <button className={styleSection.increase}>+</button>
                        <button className={styleSection.btn}>В карзину</button>
                    </div>
                    <div className={styleSection.fourthGroup}>
                        <img className={styleSection.chiz} src="https://i.ibb.co/D7zcxWb/Tofu-Burger-PNG-Image-1-2.png" alt="Burger"/>
                        <h3 className={styleSection.chizTitle}>Чизбургер</h3>
                        <p className={styleSection.chizText}>Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                        <h3 className={styleSection.price}>200 сом</h3>
                        <button className={styleSection.decrease}>-</button>
                        <input type="text" value="1" className={styleSection.input}/>
                        <button className={styleSection.increase}>+</button>
                        <button className={styleSection.btn}>В карзину</button>
                    </div>
                </div>
                <div className={styleSection.elem3}>
                    <h4 className={styleSection.new}>Меню</h4>
                </div>
                <div className={styleSection.elem4}>
                    <a href="" className={styleSection.pizza}>Пицца</a>
                    <a href="" className={styleSection.burger}>Бургер</a>
                    <a href="" className={styleSection.sushi}>Суши</a>
                    <a href="" className={styleSection.rolls}>Роллы</a>
                    <a href="" className={styleSection.salads}>Салаты</a>
                    <a href="" className={styleSection.desserts}>Десерты</a>
                    <a href="" className={styleSection.drinks}>Напитки</a>
                </div>
            </div>
        </>
    );
};

export default FirstSection;