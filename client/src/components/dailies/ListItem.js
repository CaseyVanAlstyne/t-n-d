import React from 'react';


const ListItem = ({todo}) => {


    return (
        <div className="container">
            {todo.name}
            {todo.experience}
            {todo.date}
        </div>
    ) 
}

export default ListItem; 
