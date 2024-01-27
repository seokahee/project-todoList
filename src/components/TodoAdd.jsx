import { useRef, useState } from "react";

const TodoAdd = ({ setList, list }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [deadline, setDeadline] = useState("");

  // focus 이벤트 변수
  const titleEl = useRef(null);
  const contentEl = useRef(null);
  const deadlineEl = useRef(null);

  const addTitle = (e) => {
    setTitle(e.target.value);
  };

  const addContent = (e) => {
    setContent(e.target.value);
  };
  const inputDate = new Date(deadline);
  const transformDate = inputDate.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const addDeadline = (e) => {
    setDeadline(e.target.value);
  };
  // 추가 이벤트
  const submitBtn = (e) => {
    const newList = {
      id: new Date(),
      title,
      content,
      isDone: false,
      deadline: transformDate,
    };

    // 유효성 검사
    if (title.length === 0) {
      alert("제목을 입력해 주세요");
      return titleEl.current.focus();
    }
    if (content.length === 0) {
      alert("내용을 입력해 주세요");
      return contentEl.current.focus();
    }
    if (deadline.length === 0) {
      alert("마감일을 입력해 주세요");
      return deadlineEl.current.focus();
    }
    alert(`"${title}" 일정 등록이 완료되었습니다.`);
    setList([...list, newList]);
    setTitle("");
    setContent("");
    setDeadline("");
  };
  return (
    <div className="add-div">
      <div className="add-input-div">
        <div className="input-div">
          <label htmlFor="title" className="label-text">
            제목
          </label>
          <input
            value={title}
            ref={titleEl}
            onChange={addTitle}
            className="todo-input"
            id="title"
            placeholder="제목을 입력하세요"
            maxLength={10}
          />
        </div>
        <div className="input-div">
          <label htmlFor="content" className="label-text">
            내용
          </label>
          <input
            value={content}
            ref={contentEl}
            onChange={addContent}
            className="todo-input"
            id="content"
            placeholder="내용을 입력하세요"
          />
        </div>
        <div className="input-div">
          <label htmlFor="deadline" className="label-text">
            마감일
          </label>
          <input
            type="date"
            className="deadline-input"
            value={deadline}
            ref={deadlineEl}
            onChange={addDeadline}
          />
        </div>
      </div>
      <button className="addList-btn" onClick={submitBtn}>
        추가하기
      </button>
    </div>
  );
};
export default TodoAdd;
