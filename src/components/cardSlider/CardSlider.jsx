import { useState, useContext } from 'react';
import './cardslider.scss';
import FlashCard from '../FlashCard/FlashCard';
import dataContext from '../../dataContext';

function CardSlider(props) {
    const { cardIndex } = props;
    let { data, isLoading, isError } = useContext(dataContext);
    const [index, setIndex] = useState(cardIndex ? cardIndex : 0);
    const [wordsLearned, setWordsLearned] = useState(0);

    const countWords = () => {
        let learnedWords = wordsLearned;

        if (learnedWords !== data.length) {
            setWordsLearned(learnedWords => learnedWords + 1);
        }
    };

    const card = data.filter((item, i) => {
        return i === index
    });

    if (isLoading) {
        return <p>Loading ...</p>;
    }

    if (isError) {
        return <p>{isError.message}</p>;
    }

    return (
        <>
            <section className='flashcards-container'>
                <button className='button-arrow button-arrow-left' onClick={() => { setIndex(index - 1) }} disabled={index === 0}><span className="material-symbols-outlined">
                    &lt;
                </span></button>
                {card.map((data) => {
                    return <FlashCard {...data} key={data.id} countWords={countWords} />;

                })
                }
                <button className='button-arrow button-arrow-right' onClick={() => { setIndex(index + 1) }} disabled={index === data.length - 1}><span className="material-symbols-outlined">
                    &gt;
                </span></button>
            </section>
            <p className='word-counter'>Words learned : {wordsLearned}/{data.length}</p>
        </>
    )
}
export default CardSlider;