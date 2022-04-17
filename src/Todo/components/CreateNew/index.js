import React, {useState} from 'react';

import Input from '../../../components/Input';
import Btn from '../../../components/Button';

const CreateNew = ({ handleSave }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({ target }) => setInputValue(target.value)

    const onHandleSave = async () => {
        if (inputValue.trim() !== '') {
            await handleSave(inputValue)
            await setInputValue('')
        } else {
            alert('Input is empty...')
        }
    }

    return (
        <div>
            <Input value={inputValue} onChange={handleInputChange} />
            <Btn onClick={onHandleSave} />
        </div>
    );
};

export default CreateNew;