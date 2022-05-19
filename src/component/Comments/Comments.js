import React from 'react';
import styleComment from "./Comments.module.css"

const Comments = () => {
    return (
        <div className={styleComment.comments}>
            <div>
                <h3 className={styleComment.title}>Отзывы:</h3>
            </div>
            <div className={styleComment.firstComment}>
                <img className={styleComment.image} src="https://i.ibb.co/09X9xGP/image.png" alt="image"/>
                <img className={styleComment.ellips} src="https://i.ibb.co/tsBCdFN/Ellipse-12.png" alt="Ellipse-12"/>
                <h5 className={styleComment.commentTitle}>Сергей <img src="https://i.ibb.co/km5K7Lv/1.png" alt="1"/></h5>
                <p className={styleComment.commentText}>Большое спасибо! 5 пицц доставили даже быстрее чем планировалось. Пицца была горячая и всему коллективу понравилась! День Рождения прошел отлично! :)</p>
                <p className={styleComment.date}>02.07.2020</p>
            </div>
            <div className={styleComment.secondComment}>
                <img className={styleComment.image} src="https://i.ibb.co/09X9xGP/image.png" alt="image"/>
                <img className={styleComment.ellips} src="https://i.ibb.co/tsBCdFN/Ellipse-12.png" alt="Ellipse-12"/>
                <h5 className={styleComment.commentTitle}>Сергей <img src="https://i.ibb.co/km5K7Lv/1.png" alt="1"/></h5>
                <p className={styleComment.commentText}>Очень вкусные роллы Хаки, всем рекомендую! заказали в первый раз и теперь станем постоянными клиентами! Спасибо!</p>
                <p className={styleComment.date}>02.07.2020</p>
            </div>
            <div className={styleComment.thirdComment}>
                <img className={styleComment.image} src="https://i.ibb.co/09X9xGP/image.png" alt="image"/>
                <img className={styleComment.ellips} src="https://i.ibb.co/tsBCdFN/Ellipse-12.png" alt="Ellipse-12"/>
                <h5 className={styleComment.commentTitle}>Сергей <img src="https://i.ibb.co/km5K7Lv/1.png" alt="1"/></h5>
                <p className={styleComment.commentText}>Очень избирателен в еде, и Уже в третий раз не разочаровываюсь в Food Planet, советую всем! Жена тоже довольна!</p>
                <p className={styleComment.date}>02.07.2020</p>
            </div>
            <div className={styleComment.fourthComment}>
                <img className={styleComment.image} src="https://i.ibb.co/09X9xGP/image.png" alt="image"/>
                <img className={styleComment.ellips} src="https://i.ibb.co/tsBCdFN/Ellipse-12.png" alt="Ellipse-12"/>
                <h5 className={styleComment.commentTitle}>Сергей <img src="https://i.ibb.co/km5K7Lv/1.png" alt="1"/></h5>
                <p className={styleComment.commentText}>Хочу поблагодарить за бургер !Очень вкусненький в меру остренький) Спасибо,удивили!)</p>
                <p className={styleComment.date}>02.07.2020</p>
            </div>
        </div>
    );
};

export default Comments;