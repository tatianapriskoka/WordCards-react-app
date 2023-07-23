import { useState, useEffect } from 'react';
import './cardslider.scss';
import FlashCard from '../FlashCard/FlashCard';
import { inject, observer } from 'mobx-react';


function CardSlider({ data, isLoading, error, wordsLearned, countWords, ...props }) {
    const { cardIndex } = props;
    const [index, setIndex] = useState(cardIndex ? cardIndex : 0);



    const card = data.filter((item, i) => {
        return i === index
    });


    if (isLoading) {
        return <div className="container">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
            <div className="circle circle-5"></div>
        </div>;
    }
    if (error) {
        return <p>{error}</p>;
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
export default inject(({ wordsStore }) => {
    const { data, getAllWords, isLoaded, isLoading, error, wordsLearned, countWords } = wordsStore;
    useEffect(() => {
        if (!isLoaded) {
            getAllWords();
        }
    }, [])
    return {
        data, getAllWords, isLoaded, isLoading, error, wordsLearned, countWords
    };
})(observer(CardSlider));