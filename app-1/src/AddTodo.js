import React, { useState } from 'react';

export default function AddTodo(props) {
  const [addItem, setAddItem] = useState('');

  return (
    <div>
      <input
        onChange={(e) => setAddItem(e.target.value)}
        value={addItem}
      ></input>
      <button onClick={() => props.addTodoList(addItem)}>Add to list</button>
    </div>
  );
}
