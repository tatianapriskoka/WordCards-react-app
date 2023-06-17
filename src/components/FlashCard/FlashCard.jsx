import './flashcard.scss';
import { useState } from 'react';

function FlashCard(props) {
    const { english, russian, id = 0, transcription } = props;
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked)
    }

    return (
        <div className='flashcard' key={id}  >
            <div className='flashcard__english'>{english}</div>
            <div className='flashcard__transcription'>{transcription}</div>
            <div className='flashcard__translation' onClick={handleChange}>{
                checked ? <div className='flashcard__russian'>{russian}</div> : <button className='flashcard__button'>Проверить</button>
            }</div>
        </div>
    )
}

export default FlashCard;
