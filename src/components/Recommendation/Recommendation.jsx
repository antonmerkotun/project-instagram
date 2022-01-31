import React from 'react';

//style
import "./Recommendation.scss"

//components
import UserAvatar from "../UserAvatar/UserAvatar";


const Recommendation = ({account, recommendations}) => {

    const subscribe = (e) => {
        recommendations.users.forEach(el => {
            if (el._id === e.target.id) {
                ///////////////
            }
        })
    }


    return (
        <div className='recommendation' key={account._id}>
            <div className="recommendation__user-info">
                <div className="recommendation__user-avatar">
                    <UserAvatar avatar={account.avatar}/>
                </div>
                <div className="recommendation__user-name">
                    <div className="recommendation__user-nickName">{account.nickName}</div>
                    <div className="recommendation__user-fullName">{account.name} {account.lastName}</div>
                </div>
            </div>
            <div className="recommendation__all">Рекомендации для вас</div>
            <div className="recommendation-list">
                {recommendations.users.map((user) => (
                    <div className="recommendation-list-block" key={user._id}>
                        <div className="recommendation-list-user">
                            <div className="recommendation-list-user-avatar">
                                <UserAvatar avatar={user.avatar}/>
                            </div>
                            <div className="recommendation-list-user-nickName">
                                <p>{user.nickName}</p>
                            </div>
                        </div>
                        <div>
                            <button id={user._id} className="recommendation-list-user-button"
                                    onClick={subscribe}>Подписаться
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <p className="recommendation__info">Информация Помощь Пресса API Вакансии</p>
                <p className="recommendation__info">Конфиденциальность Условия Места</p>
                <p className="recommendation__info">Популярные аккаунты Хэштеги Язык </p>
            </div>
            <p className="recommendation__signature">© 2022 INSTAGRAM FROM META</p>
        </div>
    );
};

export default Recommendation;