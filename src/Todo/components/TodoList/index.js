import React from 'react';
import TodoItem from "../TodoItem";
import {Form} from "../Wrap/styles";

const TodoList = ({ data }) => {


    return (
        <Form>
            <p>My list:</p>
            {data.length
                ? data.map(TodoItem)
                : <span>List is empty...</span>}
        </Form>
    );
};

export default TodoList;