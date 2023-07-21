import React from 'react';
import styles from './Todo.module.css';
import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({ todo, onUpdate, onDelete }) {
  const {id, text, status} = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({...todo, status});
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li className={styles.todo}>
      <input className={styles.checkbox} id={id} type="checkbox" checked={status === 'completed'} onChange={handleChange} />
      <label className={styles.text} htmlFor={id}>{text}</label>
      <button className={styles.button} onClick={handleDelete}><FaTrashAlt /></button>
    </li>
  );
}

