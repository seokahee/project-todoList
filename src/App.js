import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Todo List</h1>
      </header>
      <div className="contentDiv">
        <label for="title">제목</label>
        <input className="contentInput" id="title" />

        <label for="content">내용</label>
        <input className="contentInput" id="content" />

        <button className="addBtn">추가하기</button>
      </div>
    </div>
  );
}

export default App;
