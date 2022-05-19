import React from 'react';
import styles from "./SecondSection.module.css"
import styleSection from "../FirstSection/FirstSection.module.css";

const SecondSection = () => {
    return (
        <div className={styles.secSection}>
            <div className={styles.sorting}>
                <span className={styles.span}>Сортировать по:</span>
                <select className={styles.select} name="profile">
                    <option value="1">По умолчанию</option>
                    <option value="2">...</option>
                </select>
            </div>
            <div className={styles.group}>
                <div className={styles.firstGroup}>
                    <img className={styles.mexican} src="https://i.ibb.co/JC9sBFz/Tofu-Burger-PNG-Image-1-3.png" alt="Burger"/>
                    <h3 className={styles.mexTitle}>Мексиканская</h3>
                    <p className={styles.mexText}>Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                    <h3 className={styles.price}>200 сом</h3>
                    <button className={styles.decrease}>-</button>
                    <input type="text" value="1" className={styles.input}/>
                    <button className={styles.increase}>+</button>
                    <button className={styles.btn}>В карзину</button>
                </div>
                <div className={styles.secondGroup}>
                    <img className={styles.mexican} src="https://i.ibb.co/Jx4xNLR/Tofu-Burger-PNG-Image-2.png" alt="Burger"/>
                    <h3 className={styles.mexTitle}>Мексиканская</h3>
                    <p className={styles.mexText}>Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                    <h3 className={styles.price}>200 сом</h3>
                    <button className={styles.decrease}>-</button>
                    <input type="text" value="1" className={styles.input}/>
                    <button className={styles.increase}>+</button>
                    <button className={styles.btn}>В карзину</button>
                </div>
                <div className={styles.thirdGroup}>
                    <img className={styles.mexican} src="https://i.ibb.co/RNmZzyr/Tofu-Burger-PNG-Image-2-1.png" alt="Burger"/>
                    <h3 className={styles.mexTitle}>Мексиканская</h3>
                    <p className={styles.mexText}>Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                    <h3 className={styles.price}>200 сом</h3>
                    <button className={styles.decrease}>-</button>
                    <input type="text" value="1" className={styles.input}/>
                    <button className={styles.increase}>+</button>
                    <button className={styles.btn}>В карзину</button>
                </div>
                <div className={styles.fourthGroup}>
                    <img className={styles.mexican} src="https://i.ibb.co/RNmZzyr/Tofu-Burger-PNG-Image-2-1.png" alt="Burger"/>
                    <h3 className={styles.mexTitle}>Мексиканская</h3>
                    <p className={styles.mexText}>Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                    <h3 className={styles.price}>200 сом</h3>
                    <button className={styles.decrease}>-</button>
                    <input type="text" value="1" className={styles.input}/>
                    <button className={styles.increase}>+</button>
                    <button className={styles.btn}>В карзину</button>
                </div>
                <div className={styles.firstLine}>
                    <img className={styles.mexican} src="https://i.ibb.co/Jx4xNLR/Tofu-Burger-PNG-Image-2.png" alt="Burger"/>
                    <h3 className={styles.mexTitle}>Мексиканская</h3>
                    <p className={styles.mexText}>Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                    <h3 className={styles.price}>200 сом</h3>
                    <button className={styles.decrease}>-</button>
                    <input type="text" value="1" className={styles.input}/>
                    <button className={styles.increase}>+</button>
                    <button className={styles.btn}>В карзину</button>
                </div>
                <div className={styles.secondLine}>
                    <img className={styles.mexican} src="https://i.ibb.co/wdJDJLJ/Tofu-Burger-PNG-Image-1-4.png" alt="Burger"/>
                    <h3 className={styles.mexTitle}>Мексиканская</h3>
                    <p className={styles.mexText}>Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                    <h3 className={styles.price}>200 сом</h3>
                    <button className={styles.decrease}>-</button>
                    <input type="text" value="1" className={styles.input}/>
                    <button className={styles.increase}>+</button>
                    <button className={styles.btn}>В карзину</button>
                </div>
                <div className={styles.thirdLine}>
                    <img className={styles.mexican} src="https://i.ibb.co/RNmZzyr/Tofu-Burger-PNG-Image-2-1.png" alt="Burger"/>
                    <h3 className={styles.mexTitle}>Мексиканская</h3>
                    <p className={styles.mexText}>Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                    <h3 className={styles.price}>200 сом</h3>
                    <button className={styles.decrease}>-</button>
                    <input type="text" value="1" className={styles.input}/>
                    <button className={styles.increase}>+</button>
                    <button className={styles.btn}>В карзину</button>
                </div>
                <div className={styles.fourthLine}>
                    <img className={styles.mexican} src="https://i.ibb.co/jM00G2n/Tofu-Burger-PNG-Image-1-5.png" alt="Burger"/>
                    <h3 className={styles.mexTitle}>Мексиканская</h3>
                    <p className={styles.mexText}>Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                    <h3 className={styles.price}>200 сом</h3>
                    <button className={styles.decrease}>-</button>
                    <input type="text" value="1" className={styles.input}/>
                    <button className={styles.increase}>+</button>
                    <button className={styles.btn}>В карзину</button>
                </div>
                <div>
                    <button className={styles.button}>Показать еще</button>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;