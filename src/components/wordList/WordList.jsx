import './wordlist.scss';
import WordCard from '../wordCard/WordCard';
import { cardList } from '../../cardsData';

function WordList() {
    return
    (
        <table className="table">
            <caption className='head'>Word List</caption>
            <thead>
                <tr className="table__head">
                    <th>English</th>
                    <th>Transcription</th>
                    <th>Russian</th>
                    <th></th>
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