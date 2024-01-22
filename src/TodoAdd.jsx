import { useRef, useState } from "react";

const TodoAdd = ({ setList, list }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // focus 이벤트 변수
  const titleEl = useRef(null);
  // id변수 기본값이 있기 때문에 4부터 시작한다
  const listId = useRef(4);
  // 리액트는 가상돔인데, 직접적으로 돔을 지정할때(포커스, 스크롤이벤트같은경우) 사용되는 훅

  const addTitle = (e) => {
    setTitle(e.target.value);
  };

  const addContent = (e) => {
    setContent(e.target.value);
  };
  // 추가 이벤트
  const submitBtn = (e) => {
    const newList = {
      id: listId.current,
      title,
      content,
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
    };

    // 유효성 검사
    if (title.length === 0 || content.length === 0) {
      alert("제목과  내용을 모두 입력해 주세요");
      return titleEl.current.focus();
    }
    alert(`"${title}" 일정 등록이 완료되었습니다.`);
    console.log("추가 이벤트 id", newList.id);
    setList([...list, newList]);
    listId.current++;
    setTitle("");
    setContent("");
  };

  return (
    <div className="addList-div">
      <div className="add-input-div">
        <div className="title-input">
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
        <div className="content-input">
          <label htmlFor="content" className="label-text">
            내용
          </label>
          <input
            value={content}
            onChange={addContent}
            className="todo-input"
            id="content"
            placeholder="내용을 입력하세요"
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
