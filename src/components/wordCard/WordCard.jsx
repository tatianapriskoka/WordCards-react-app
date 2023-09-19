
import '../wordList/wordlist.scss';
import { useState } from 'react';
import { inject, observer } from 'mobx-react';

const WordCard = ({ deleteWord, editWord, getAllWords, ...props }) => {
    const { id, english, transcription, russian } = props;
    const [isEdited, setIsEdited] = useState(false);
    const [data, setData] = useState({ english, transcription, russian });
    const [isEmpty, setIsEmpty] = useState(false);
    const [isDisabled, setDisabled] = useState(false);
    const [isError, setError] = useState(false);

    const onEditFinished = (e) => {
        if (!e.currentTarget?.value) {
            setDisabled(true);
            setIsEmpty(true);
            return
        }
        else if (validate(e.currentTarget?.value) === false) {
            setDisabled(true);
        } else {
            setData({ ...data, [e.currentTarget.name]: e.currentTarget?.value });
            setIsEmpty(false);
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

    const onDeleteClick = () => {
        deleteWord(id);
    };
    const onEditFinishClick = () => {
        editWord(id, data);
    }


    if (isEdited) return (
        <tr className='table__item table__item__edited'>
            <td><input className={isEmpty ? 'empty' : 'full'} type="text" onChange={onEditFinished} defaultValue={data.english} name='english' /></td>
            <td><input className={isEmpty ? 'empty' : 'full'} type="text" onChange={onEditFinished} defaultValue={data.transcription} name='transcription' /></td>
            <td><input className={isEmpty ? 'empty' : 'full'} type="text" onChange={onEditFinished} defaultValue={data.russian} name='russian' /></td>
            <td><button disabled={isDisabled} className={isDisabled ? 'button-save disabled-btn' : 'button-save'} onClick={onEditFinishClick}>Save</button></td>
            <td><button className='button-cancel' onClick={makeEdited}>Cancel</button></td>
            {isError && <td> <span className='error'>Only letters are available</span></td>}
        </tr>

    )
    return (
        <tr className='table__item'>
            <td>{data.english}</td>
            <td>{data.transcription}</td>
            <td>{data.russian}</td>
            <td><button className='button-edit' onClick={makeEdited}>Edit</button></td>
            <td><button className='button-delete' onClick={onDeleteClick}>Delete</button></td>
        </tr>
    );
}
export default inject(({ wordsStore }) => {
    const { deleteWord, editWord, getAllWords } = wordsStore;
    return {
        deleteWord, editWord, getAllWords
    };
})(observer(WordCard));