import React from 'react';
import photo from './img/photo.png';
import like from './img/like.png';
import commentslogo from './img/comments.png'
import './css/style.css';
import Reviews from './components/reviews';
import Form from './components/form';


function App() {
    
    const [comments, setComments] = React.useState( 
        [
        {name: 'Самуил', time: '13 октября 2011', body: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!'},
        {name: 'Лилия Семёновна', time: '13 октября 2011', body: 'Вероника здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?'},
        {name: 'Лилия Семёновна', time: '13 октября 2011', body: 'Вероника здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?'}
        ] 
    );
    
    const onAddComment = (body) => {
        setComments((prevComments) => [...prevComments, {
            name: 'Гость',
            time: nowTime(),
            body
        }])
    }

    const nowTime = (UNIX_timestamp) => {
        let a = new Date();
        let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let time = `${date} ${month} ${year}`;
        return time;
        
    }   

    return (
        <div>
            <div className="salesmanager">
                <div className="salesmanager_profile">
                    <div className="salesmanager_profile_photo">
                        <img src={photo} alt=""/>
                    </div>
                    <div className="salesmanager_profile_name">
                        Вероника Ростова
                    </div>
                    <div className="salesmanager_profile_position">
                        Менеджер по продажам
                    </div>
                    <div className="salesmanager_profile_description">
                        Подберу для вас самые лучшие предложения. <br/>Мои услуги абсолютно бесплатны
                    </div>
                </div>
                <div className="offers">
                    <div className="offers_header">
                            Услуг
                    </div>
                    <div className="offers_list">
                        <div className="offers_list_item">
                            <div className="offers_list_item_name li1">Ручное бронирование</div>
                            <div className="offers_list_item_amount">11</div>
                        </div>
                        <div className="offers_list_item">
                            <div className="offers_list_item_name li2">Пакетные туры</div>
                            <div className="offers_list_item_amount">3</div>
                        </div>
                        <div className="offers_list_item">
                            <div className="offers_list_item_name li3">Отели</div>
                            <div className="offers_list_item_amount">1</div>
                        </div>
                    </div>
                    <div className="offers_all">
                        <div className="offers_all_name">Всего</div>
                        <div className="offers_all_amount">15</div>
                    </div>
                </div>
                <div className="all_comments">
                    <div className="all_comments_title">
                        Последние отзывы
                    </div>
                    <a href=" " className="all_comments_link">
                        <u>Все отзывы</u>
                    </a>
                    <div className="all_comments_social_buttons">
                        <div className="all_comments_likes">
                            <img src={like} alt="" /> 131
                        </div>
                        <div className="all_comments_comments">
                            <img src={commentslogo} alt="" /> 14
                        </div>                         
                    </div>
                </div>
          
            </div>
            {comments.map((comment, index) => (
            <Reviews 
                key={index}
                name={comment.name}
                time={comment.time}
                body={comment.body} 
            />))}
            <Form 
            onAddComment={onAddComment} 
            />
        </div>
    );
}

export default App;
