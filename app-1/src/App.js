import AddTodo from './AddTodo';
import List from './List';
import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState(['go shopping', 'finish project']);

  function addTodoList(item) {
    const newList = [...todoList, item];
    setTodoList(newList);
  }

  return (
    <div className="App">
      <AddTodo addTodoList={addTodoList} />
      <List list={todoList} />
    </div>
  );
}

export default App;
