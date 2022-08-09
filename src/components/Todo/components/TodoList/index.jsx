import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';
import { Form } from '../Wrap/styles';

import * as S from './styles';

const TodoList = ({ data }) => (
  <Form>
    <S.Name>My list:</S.Name>
    {data?.length ? data.map(TodoItem) : <S.Name>List is empty...</S.Name>}
  </Form>
);

TodoList.propTypes = {
  data: PropTypes.element.isRequired
};

export default TodoList;
