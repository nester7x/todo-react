import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const CreateNew = ({ handleSave }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => setInputValue(target.value);

  const onHandleSave = async () => {
    if (inputValue.trim() !== '') {
      await handleSave(inputValue);
      await setInputValue('');
    } else {
      alert('Input is empty...');
    }
  };

  return (
    <S.Wrapper>
      <S.TaskInput
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Write your task..."
      />
      <S.AddBtn onClick={onHandleSave}>add task</S.AddBtn>
    </S.Wrapper>
  );
};

CreateNew.propTypes = {
  handleSave: PropTypes.func.isRequired
};

export default CreateNew;
