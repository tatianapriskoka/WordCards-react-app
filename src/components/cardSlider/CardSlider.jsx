import { useState } from 'react';
import './cardslider.scss';
import FlashCard from '../FlashCard/FlashCard';
import { cardList } from '../../cardsData';

function CardSlider(props) {
    const { cardIndex } = props;
    const [index, setIndex] = useState(cardIndex ? index : 0);

    const card = cardList.filter(el => el.id === index);
    return (
        <section className='flashcards-container'>
            <button className='button-arrow button-arrow-left' onClick={() => { setIndex(index - 1) }} disabled={index === 0}>
                <span className='material-symbols-outlined'>--</span>
            </button>
            {
                card.map(data => {
                    return <FlashCard {...cardList} key={cardList.id} />
                })
            }

            <button className='button-arrow button-arrow-right' onClick={() => { setIndex(index + 1) }} disabled={index === cardList.length - 1}>
                <span className='material-symbols-outlined'>---</span>
            </button>

        </section >
    )
}
export default CardSlider;