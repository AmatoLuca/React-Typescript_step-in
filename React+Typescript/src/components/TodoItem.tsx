import React, { useContext } from 'react';
import classes from './TodoItem.module.css';
import Todo from '../models/todo';
import { TodosContext } from '../store/todos-context';

const TodoItem: React.FC<{
  todo: Todo;
}> = (props) => {
  const { deleteTodo } = useContext(TodosContext);

  return (
    <li className={classes.item} onClick={() => deleteTodo(props.todo.id)}>
      {props.todo.text}
    </li>
  );
};

export default TodoItem;
