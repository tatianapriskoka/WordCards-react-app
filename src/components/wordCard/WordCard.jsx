import '../wordList/wordlist.scss';
import { useState } from 'react';

function WordCard(props) {
    const { english, russian, transcription } = props;
    const [isEdited, setIsEdited] = useState(false);
    const [data, setData] = useState({ english, russian, transcription });
    const onEditFinished = () => {
        setData({ english: `new ${english}`, transcription, russian });
        setIsEdited(false);
    }

    const makeEdited = () => {
        setIsEdited(!isEdited);
    }

    if (isEdited) return (
        <tr className='table__item table__item_edited'>
            <td><input type='text' defaultValue={data.english} /></td>
            <td><input type='text' defaultValue={data.transcription} /></td>
            <td><input type='text' defaultValue={data.russian} /></td>
            <td><button className='button-save' onClick={onEditFinished}>Сохранить</button></td>
            <td><button className='button-cancel' onClick={makeEdited}>Отменить</button></td>
        </tr>
    )
    return (
        <tr className='table__item'>
            <td>{data.english}</td>
            <td>{data.transcription}</td>
            <td>{data.russian}</td>
            <td><button className='button-edit' onClick={makeEdited}>Редактировать</button></td>
            <td><button className='button-delete'>Удалить</button></td>
        </tr>
    );
}

export default WordCard;