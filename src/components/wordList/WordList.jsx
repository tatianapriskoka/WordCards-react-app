import './wordlist.scss';
import WordCard from '../wordCard/WordCard';
import { cardList } from '../../cardsData';
import { useContext } from 'react';
import dataContext from '../../dataContext';

function WordList() {
    let { data, setData, isLoading, isError, setLoading, setError } = useContext(dataContext);

    if (isLoading) {
        return <p>Loading...</p>
    }
    if (isError) {
        return <p>{isError.message}</p>
    }
    return (
        <table className="table">
            <caption className='head'>Word List</caption>
            <thead>
                <tr className="table__head">
                    <th>English</th>
                    <th>Transcription</th>
                    <th>Russian</th>
                    <th></th>
                </tr>
                <tr className='table__add-word'>
                    <th><input type="text" /></th>
                    <th><input type="text" /></th>
                    <th><input type="text" /></th>
                    <th><button className='add-btn'>Добавить</button></th>
                </tr>
            </thead>
            <tbody className="table__content">
                {
                    cardList.map((elem) => {
                        return <WordCard key={elem.id} {...elem} />
                    })
                }
            </tbody>
        </table>
    )
}

export default WordList;