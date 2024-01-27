import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

function App() {
  // todoList
  const [list, setList] = useState([
    {
      id: 1,
      title: "베이직 과제",
      content: "과제 테스트_1",
      isDone: false,
      deadline: "2024-01-29",
    },
    {
      id: 2,
      title: "todoList-2",
      content: "과제 테스트_2",
      isDone: false,
      deadline: "2024-01-29",
    },
    {
      id: 3,
      title: "todoList-3",
      content: "과제 테스트_3",
      isDone: false,
      deadline: "2024-01-29",
    },
  ]);

  return (
    <div className="todoList-container">
      <header>
        <h1 className="todo-logo">Todo List</h1>
      </header>
      <TodoAdd setList={setList} list={list} />
      <TodoList setList={setList} list={list} />
    </div>
  );
}

export default App;
