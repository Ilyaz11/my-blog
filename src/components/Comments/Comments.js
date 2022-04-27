import React from 'react';

const Comments = () => {
    return(
        <>
            <label htmlFor="" className="name">Имя:</label>
            <input className="name" id="comment-name" type="text" placeholder="Имя"/><br/>
            <label htmlFor="" className="comment">Комментарии:</label>
            <textarea name="password" id="comment-body" cols="50" rows="5" placeholder="Добавьте комментарий"></textarea><br/>
            <button type="submit" id="comment-add">Отправить</button>
        </>
)
}

export default Comments;