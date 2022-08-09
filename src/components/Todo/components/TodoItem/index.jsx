import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const TodoItem = ({ id, name }) => (
  <S.Name>
    {id} {name}
  </S.Name>
);

TodoItem.defaultProps = {
  id: '',
  name: ''
};

TodoItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string
};

export default TodoItem;
