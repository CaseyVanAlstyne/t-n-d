import React from 'react';
import ListItem from './ListItem';


const ListItems = ({todos}) => {
    const tasks = todos.map((todo) => {
        return <ListItem key={todo.id} todo={todo} />
    })

    return (
        <div>
            {tasks}
        </div>
    ) 
}

export default ListItems; 