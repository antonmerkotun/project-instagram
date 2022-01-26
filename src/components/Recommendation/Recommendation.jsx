import React from 'react';

//style
import "./Recommendation.scss"

const Recommendation = () => {
    return (
        <div className='recommendation'>
            <div className="recommendation__user">Пользователь</div>
            <div className="recommendation__all">Рекомендации для вас</div>
            <div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
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