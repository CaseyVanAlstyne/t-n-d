import React from "react";
const ListItem = (todo) => {
  return (
    <div className="container">
      {todo.name}
      {todo.experience}
      {todo.date}
      <button type="submit">Complete</button>
      <button type="submit">Delete</button>
    </div>
  );
};
export default ListItem;
