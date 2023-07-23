import './wordlist.scss';
import WordCard from '../wordCard/WordCard';
import { inject, observer } from 'mobx-react';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useRef, useState } from 'react';

function WordList({ data, isLoading, error, addNewWord }) {
    const [isDisabled, setDisabled] = useState(true);
    let inputTranscription = useRef(null);
    let inputEnglish = useRef(null);
    let inputRussian = useRef(null);

    const onAddClick = () => {
        addNewWord({
            id: uuidv4(),
            english: inputEnglish.current.value,
            transcription: inputTranscription.current.value,
            russian: inputRussian.current.value
        })
    }

    const checkIfEmpty = () => {
        if (Boolean(!inputEnglish.current.value) || Boolean(!inputTranscription.current.value) || Boolean(!inputRussian.current.value)) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }

    if (isLoading) {
        return <div className="container">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
            <div className="circle circle-5"></div>
        </div>
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <table className='table'>
            <caption className='heading'>List of Words</caption>
            <thead>
                <tr className='table__heading'>
                    <th>English</th>
                    <th>Transcription</th>
                    <th>Russian</th>
                    <th></th>
                </tr>
                <tr className='table__add-word'>
                    <th><input type="text" ref={inputEnglish} onChange={checkIfEmpty} /></th>
                    <th><input type="text" ref={inputTranscription} onChange={checkIfEmpty} /></th>
                    <th><input type="text" ref={inputRussian} onChange={checkIfEmpty} /></th>
                    <th><button disabled={isDisabled} className={isDisabled ? 'add-btn disabled-btn' : 'add-btn'} onClick={onAddClick} >Add</button></th>
                </tr>
            </thead>
            <tbody className='table__content'>
                {
                    data.map((item) => {
                        return <WordCard key={item.id} {...item} />
                    })
                }
            </tbody>
        </table>
    );
}
export default inject(({ wordsStore }) => {
    const { data, getAllWords, isLoaded, isLoading, error, addNewWord } = wordsStore;
    useEffect(() => {
        if (!isLoaded) {
            getAllWords();
        }
    }, [])
    return {
        data, getAllWords, isLoaded, isLoading, error, addNewWord
    };
})(observer(WordList));