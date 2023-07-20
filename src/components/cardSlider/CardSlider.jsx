import { useState, useContext } from 'react';
import './cardslider.scss';
import FlashCard from '../FlashCard/FlashCard';
import { cardList } from '../../cardsData';
import dataContext from '../../dataContext';

function CardSlider(props) {
    const { cardIndex } = props;
    const { data, isLoading, isError } = useContext(dataContext)
    const [index, setIndex] = useState(cardIndex ? index : 0);
    const [wordsLearn, setWords] = useState(0);

    //const card = cardList.filter(el => el.id === index);
    const countWords = () => {
        let words = wordsLearn;
        if (wordsLearn !== cardList.length) {
            setWords(words => words + 1)
        }
    };
    const card = cardList.filter(el => el.id === index);

    if (isLoading) {
        return <p>Loading ...</p>;
    }
    if (isError) {
        return <p>{isError.message}</p>;
    }


    return (
        <>
            <section className='flashcards-container'>
                <button className='button-arrow button-arrow-left' onClick={() => { setIndex(index - 1) }} disabled={index === 0}>
                    <span className='material-symbols-outlined'>--</span>
                </button>
                {card.map(data => {
                    return <FlashCard key={data.id} {...data} countWords={countWords} />
                })
                }

                <button className='button-arrow button-arrow-right' onClick={() => { setIndex(index + 1) }} disabled={index === cardList.length - 1}>
                    <span className='material-symbols-outlined'>---</span>
                </button>

            </section >

            <p className='word-counter'> Words learned: {wordsLearn}/ {cardList.length}</p>
        </>
    )
}
export default CardSlider;