import React from 'react';

const FastExposition = (props) => {
    return (
        <div className="w3-col l12 s12">
            <div className="w3-margin">
                <h1 className="title">{props.title}</h1>
                <div className="Flex">
                    <div className="text">
                        <p className="desc" align="justify">{props.desc}</p>
                    </div>
                    <div className="picture">
                        <img className="img" src={props.img} alt="mountain"/>
                    </div>
                </div>
                <hr className="range"/>
                <h4 className="leaveComment">Оставьте комментарий</h4>
                <input className="name" type="text" placeholder="Имя"/><br/>
                <textarea className="comment" placeholder="Напишите комментарий"/><br/>
                <button className="btn">Отправить</button>
                <hr className="line"/>
                    <h4 className="Comment">Комментарии</h4>
                    <div className="firstComment">
                        <div className="commentIns">
                            <span>Rick Cook</span>
                            <span>10.10.2000</span>
                        </div>
                        <div className="commentKeep">
                            <span>{props.firstComments}</span>
                        </div>
                    </div>
                    <div className="secondComment">
                        <div className="commentIns">
                            <span>Jack Dorsey</span>
                            <span>12.10.2008</span>
                        </div>
                        <div className="commentKeep">
                            <span>{props.secondComments}</span>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default FastExposition;