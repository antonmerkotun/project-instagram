import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

//style
import "./Recommendation.scss"

//components
import UserAvatar from "../UserAvatar/UserAvatar";
import UsersList from "../UsersList/UsersList";
import Main from "../../pages/Main/Main";


const Recommendation = ({accountData, subscriptions, recommendations}) => {
    return (
        <>
            {accountData.loading === false &&
                <div className='recommendation' key={accountData.data._id}>
                    <div className="recommendation__user-info">
                        <div className="recommendation__user-avatar">
                            <Link className="link" to={`/user/${accountData.data._id}`}>
                                <UserAvatar avatar={accountData.data.avatar}/>
                            </Link>
                        </div>
                        <div className="recommendation__user-name">
                            <Link className="link" to={`/user/${accountData.data._id}`}>
                                <div
                                    className="recommendation__user-nickName">{accountData.data.name.nickName}</div>
                                <div
                                    className="recommendation__user-fullName">{accountData.data.name.firstName} {accountData.data.name.lastName}</div>
                            </Link>
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
            }
        </>
    );
};

Recommendation.protoType = {
    accountData: PropTypes.object,
    subscriptions: PropTypes.object,
    recommendations: PropTypes.object,
}

export default Recommendation;