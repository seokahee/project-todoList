import { useRef, useState } from "react";
import "./App.css";
// import List from "./List";s

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
      id: list.length + 1,
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
      alert("제목과  내용을 모두 입력해 주세요");
      return titleEl.current.focus();
    }
    alert(`"${title}" 일정 등록이 완료되었습니다.`);
    setList([...list, newList]);
    setTitle("");
    setContent("");
  };

  // 삭제 이벤트
  const removeBtn = (id, title) => {
    if (window.confirm(`"${title}" 일정을 삭제하시겠습니까?`)) {
      alert(`"${title}" 일정이 삭제되었습니다.`);
      const filteredList = list.filter((list) => list.id !== id);
      return setList(filteredList);
    } else {
      alert("삭제가 취소되었습니다.");
      return;
    }
  };

  // 완료 리스트
  const completedBtn = (id) => {
    const completedList = list.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setList(completedList);
  };

  return (
    <div className="container">
      <h1 className="logo">Todo List</h1>

      <div className="addDiv">
        <div className="inputDiv">
          <div className="titleInput">
            <label htmlFor="title" className="labelText">
              제목
            </label>
            <input
              value={title}
              ref={titleEl}
              onChange={addTitle}
              className="todoInput"
              id="title"
              placeholder="제목을 입력하세요"
              maxLength={10}
            />
          </div>
          <div className="contentInput">
            <label htmlFor="content" className="labelText">
              내용
            </label>
            <input
              value={content}
              onChange={addContent}
              className="todoInput"
              id="content"
              placeholder="내용을 입력하세요"
            />
          </div>
        </div>
        <button className="addBtn" onClick={submitBtn}>
          추가하기
        </button>
      </div>
      <div className="listDiv">
        <h1>🔥Working</h1>
        <div className="workingDiv">
          {list
            .filter((item) => !item.isDone)
            .map((item) => {
              return (
                <div key={item.id} className="todoDiv">
                  <div className="todoContent">
                    <div className="title">{item.title}</div>
                    <div className="content"> {item.content}</div>
                    <div className="regDate"> 등록일 {item.regDate}</div>
                    <div className="btnDiv">
                      <button
                        onClick={() => removeBtn(item.id, item.title)}
                        className="removeBtn"
                      >
                        삭제
                      </button>
                      <button
                        onClick={() => completedBtn(item.id)}
                        className="CompletedBtn"
                      >
                        완료
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <h1>🌈Done!</h1>
        <div className="doneDiv">
          {list
            .filter((item) => item.isDone)
            .map((item) => {
              return (
                <div key={item.id} className="todoDiv">
                  <div className="todoContent">
                    <div className="title">{item.title}</div>
                    <div className="content"> {item.content}</div>
                    <div className="regDate"> 등록일 {item.regDate}</div>
                    <div className="btnDiv">
                      <button
                        onClick={() => removeBtn(item.id, item.title)}
                        className="removeBtn"
                      >
                        삭제
                      </button>
                      <button
                        onClick={() => completedBtn(item.id)}
                        className="cancelBtn"
                      >
                        취소
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
