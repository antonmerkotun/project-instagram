import React from 'react';

//style
import "./Recommendation.scss"

const Recommendation = () => {
    return (
        <div className='recommendation'>
            <div>Пользователь</div>
            <div>Рекомендации для вас</div>
            <div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
            <div>
                <p>Информация Помощь Пресса API Вакансии</p>
                <p>Конфиденциальность Условия Места</p>
                <p>Популярные аккаунты Хэштеги Язык </p>
            </div>
            <div>© 2022 INSTAGRAM FROM META</div>
        </div>
    );
};

export default Recommendation;