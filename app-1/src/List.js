import React from 'react';
import Todo from './Todo';

export default function List(props) {
  return (
    <div>
      {props.list.map((val) => {
        return <Todo item={val} />;
      })}
    </div>
  );
}
