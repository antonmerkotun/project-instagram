import React from 'react';

//style
import "./Recommendation.scss"

//components
import UserAvatar from "../UserAvatar/UserAvatar";
import Loading from "../Loading/Loading";
import UsersList from "../usersList/UsersList";


const Recommendation = ({accountData, recommendations}) => {

    return (
        <div className='recommendation' key={accountData.account._id}>
            <div className="recommendation__user-info">
                <div className="recommendation__user-avatar">
                    <UserAvatar avatar={accountData.account.avatar}/>
                </div>
                <div className="recommendation__user-name">
                    <div className="recommendation__user-nickName">{accountData.account.nickName}</div>
                    <div className="recommendation__user-fullName">{accountData.account.name} {accountData.account.lastName}</div>
                </div>
            </div>
            {accountData.account.subscription && <UsersList users={accountData.account} button={false}/>}
            <div className="recommendation__all">Рекомендации для вас</div>
            <UsersList users={recommendations.users} button={true}/>
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