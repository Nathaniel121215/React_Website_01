import React from 'react'
import './Cards.css';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';

function Cards({link,image,data,text}) {
  return (
    <div className="cards" id="services">
        <h1>Check out these EPIC Destinations!</h1>

        <div className="cards__container" >
            <div className="cards__wrapper">
                <ul className="cards__items">
                    

                    <CardItem
                    src="images/img-9.jpg"
                    text="Explore the hidden waterfall deep inside the amazon jungle"
                    label="Adventure"
                    path="/service "/>

                    <CardItem
                    src="images/img-2.jpg"
                    text="Explore the hidden waterfall deep inside the amazon jungle"
                    label="Luxury"
                    path="/service "/>

                    

                        {/* <li className="cards__item">
                        <Link className="cards__item__link" to={link}>
                            <figure className="cards__item__pic-wrap" data-category={data}>
                                <img src={image} alt="" className="cards__item__img"/>
                            </figure>

                            <div className="cards__item__info">
                                <h5 className="cards__item__text">{text}</h5>
                            </div>
                        </Link> 
                        </li>*/}
                    
                </ul>

                <ul className="cards__items">
                        <CardItem
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the amazon jungle"
                        label="Adventure"
                        path="/service "/>

                        <CardItem
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the amazon jungle"
                        label="Adventure"
                        path="/service "/>

                        <CardItem
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the amazon jungle"
                        label="Adventure"
                        path="/service "/>
                    </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards