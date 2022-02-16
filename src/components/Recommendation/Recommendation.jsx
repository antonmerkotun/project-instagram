import React from 'react';

//style
import "./Recommendation.scss"

//components
import UserAvatar from "../UserAvatar/UserAvatar";
import UsersList from "../usersList/UsersList";


const Recommendation = ({accountData, subscriptions, recommendations}) => {

    return (
        <div className='recommendation' key={accountData.account._id}>
            <div className="recommendation__user-info">
                <div className="recommendation__user-avatar">
                    <UserAvatar avatar={accountData.account.avatar}/>
                </div>
                <div className="recommendation__user-name">
                    <div className="recommendation__user-nickName">{accountData.account.nickName}</div>
                    <div
                        className="recommendation__user-fullName">{accountData.account.name} {accountData.account.lastName}</div>
                </div>
            </div>
            <div className="recommendation__all">Вы подписаны</div>
            <UsersList users={subscriptions.data} button={"del"}/>
            <div className="recommendation__all">Рекомендации для вас</div>
            <UsersList users={recommendations.data} button={"sav"}/>
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