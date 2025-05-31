import React from "react";
import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <div>
      <form className={styles.todoform} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            type="text"
            value={todo.name}
            placeholder="Enter todo item..."
          />
          <button className={styles.modernButton}>Add</button>
        </div>
      </form>
    </div>
  );
}
