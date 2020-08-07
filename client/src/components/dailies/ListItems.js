import React from 'react';
import ListItem from './ListItem';


const ListItems = ({tasks}) => {
    const todos = tasks.map((task) => {
        return <ListItem key={task.id} task={task} />
    })

    return (
        <div>
            {todos}
        </div>
    ) 
}

export default ListItems; 