import React from 'react';

const TodoItem = ({ id, name}) => {
    return (
        <div>
            {id} {name}
        </div>
    );
};

TodoItem.defaultProps = {
    id: '',
    name: ''
}

export default TodoItem;