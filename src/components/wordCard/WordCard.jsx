import '../wordList/wordlist.scss';
import { useState } from 'react';

function WordCard(props) {
    const { english, russian, transcription } = props;
    const [isEdited, setIsEdited] = useState(false);
    const [data, setData] = useState({ english, russian, transcription });

    const [isEmpty, setEmpty] = useState(false);
    const [isDisabled, setDisabled] = useState(false);
    const [isError, setError] = useState(false);


    const onEditFinished = (e) => {
        if (!e.currentTarget?.value) {
            setDisabled(true);
            setEmpty(true);
            return;
        } else if (validate(e.currentTarget?.value) === false) {
            setDisabled(true);
        } else {
            setData({ ...data, [e.currentTarget.name]: e.currentTarget?.value });
            setEmpty(false);
            setDisabled(false);
        }
    };

    const validate = (str) => {
        const reg = new RegExp(/^[^0-9]*$/i);

        if (str.match(reg)) {
            setError(false);
            console.log(`Result: ${str}`);
            return true;
        } setError(true);
        return false;
    };

    const makeEdited = () => {
        setIsEdited(!isEdited);
    };

    const onButtonChange = () => {
        setIsEdited(!isEdited);
    }

    if (isEdited) return (
        <tr className='table__item table__item_edited'>
            <td><input className={isEmpty ? 'empty' : 'full'} type='text'
                onChange={onEditFinished}
                defaultValue={data.english} name='english' /></td>
            <td><input className={isEmpty ? 'empty' : 'full'} type='text'
                onChange={onEditFinished}
                defaultValue={data.transcription} name='transcription' /></td>
            <td><input className={isEmpty ? 'empty' : 'full'} type='text'
                onChange={onEditFinished}
                defaultValue={data.russian} name='russian' /></td>
            <td><button disabled={isDisabled} className={isDisabled ? 'button-save disabled-btn' : 'button-save'}
                onClick={onEditFinished}>Сохранить</button></td>
            <td><button className='button-cancel' onClick={makeEdited}>Отменить</button></td>
            {isError && <td> <span className='error'>Можно пользоваться только буквами</span></td>}
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