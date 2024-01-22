import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

function App() {
  // todoList
  const [list, setList] = useState([
    {
      id: 1,
      title: "todoList",
      content: "과제를 해봅시다",
      isDone: false,
      regDate: (() => {
        const now = new Date();
        const today =
          now.getFullYear() +
          "년" +
          (now.getMonth() + 1) +
          "월" +
          now.getDate() +
          "일";
        return today;
      })(),
    },
    {
      id: 2,
      title: "todoList",
      content: "과제를 해봅시다",
      isDone: false,
      regDate: (() => {
        const now = new Date();
        const today =
          now.getFullYear() +
          "년" +
          (now.getMonth() + 1) +
          "월" +
          now.getDate() +
          "일";
        return today;
      })(),
    },
    {
      id: 3,
      title: "todoList",
      content: "과제를 해봅시다",
      isDone: false,
      regDate: (() => {
        const now = new Date();
        const today =
          now.getFullYear() +
          "년" +
          (now.getMonth() + 1) +
          "월" +
          now.getDate() +
          "일";
        return today;
      })(),
    },
  ]);

  return (
    <div className="todoList-container">
      <h1 className="todo-logo">Todo List</h1>

      <TodoAdd setList={setList} list={list} />
      <TodoList setList={setList} list={list} />
    </div>
  );
}

export default App;
