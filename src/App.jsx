import { useRef, useState } from "react";
import "./App.css";
import List from "./deleteList";

function App() {
  // todoList
  const [lists, setLists] = useState([
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

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDone, setDone] = useState(false);

  // focus 이벤트 변수
  const titleEl = useRef(null);

  const addTitle = (e) => {
    setTitle(e.target.value);
  };

  const addContent = (e) => {
    setContent(e.target.value);
  };
  // 추가 이벤트
  const submitBtn = (e) => {
    const newList = {
      id: lists.length + 1,
      title,
      content,
      isDone,
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
    };
    // 유효성 검사
    if (title.length === 0 || content.length === 0) {
      alert("제목이나 내용을 입력해 주세요");
      return titleEl.current.focus();
    }
    alert("등록이 완료되었습니다.");
    setLists([...lists, newList]);
    setTitle("");
    setContent("");
  };

  // 삭제 이벤트
  const removeBtn = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      alert("삭제가 완료되었습니다.");
      const filteredList = lists.filter((list) => list.id !== id);
      return setLists(filteredList);
    } else {
      alert("삭제가 취소되었습니다.");
      return;
    }
  };

  return (
    <div className="container">
      <h1 className="logo">Todo List</h1>

      <div className="addDiv">
        <input
          value={title}
          ref={titleEl}
          onChange={addTitle}
          className="title"
          id="title"
          placeholder="제목을 입력하세요"
        />
        <textarea
          value={content}
          onChange={addContent}
          className="content"
          id="content"
          placeholder="내용을 입력하세요"
        />
        <button className="addBtn" onClick={submitBtn}>
          추가하기
        </button>
      </div>
      <div className="todoDiv">
        {lists.map((item) => {
          return <List key={item.id} item={item} removeBtn={removeBtn} />;
        })}
      </div>
    </div>
  );
}

export default App;
