import './wordlist.scss';
import WordCard from '../wordCard/WordCard';

import { useContext, useRef } from 'react';
import dataContext from '../../dataContext';
import { addNewWord } from '../../API/requests';
import { v4 as uuidv4 } from 'uuid';

function WordList() {

    let { data, isLoading, isError, setGettingAllWords } = useContext(dataContext);
    let inputTranscription = useRef(null);
    let inputEnglish = useRef(null);
    let inputRussian = useRef(null);

    const onAddClick = () => {
        addNewWord({
            id: uuidv4(),
            english: inputEnglish.current.value,
            transcription: inputTranscription.current.value,
            russian: inputRussian.current.value
        }).then(() => {
            const random = Math.random() * 100;
            setGettingAllWords(random);
        });
    }

    if (isLoading) {
        return <p>Loading ...</p>;
    }
    if (isError) {
        return <p>{isError.message}</p>;
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
                    <th><input type="text" ref={inputEnglish} /></th>
                    <th><input type="text" ref={inputTranscription} /></th>
                    <th><input type="text" ref={inputRussian} /></th>
                    <th><button onClick={onAddClick} className='add-btn'>Добавить</button></th>
                </tr>
            </thead>
            <tbody className='table__content'>
                {
                    data.map((item) => {
                        return <WordCard key={item.id} {...item} setGettingAllWords={setGettingAllWords} />
                    })
                }
            </tbody>
        </table>
    );
}
export default WordList;