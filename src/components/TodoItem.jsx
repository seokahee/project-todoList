const TodoItem = function ({ item, removeBtn, completedBtn }) {
  // todo의 working와 done의 로직은 버튼 제외 완전히 똑같기때문에 따로 분리하여 list와 연결해준다
  return (
    <div key={item.id} className="todo-div">
      <div className="todo-content-div">
        <div className="title-div">{item.title}</div>
        <div className="content-div"> {item.content}</div>
        <div className="deadline-div">마감일 {item.deadline}</div>
      </div>
      <div className="buttons-div">
        <button
          onClick={() => removeBtn(item.id, item.title)}
          className="remove-btn"
        >
          삭제
        </button>

        {/** 삼항연산자를 이용해 isDone 상태에 따라 버튼이 보인다.  */}
        {item.isDone ? (
          <button onClick={() => completedBtn(item.id)} className="cancel-btn">
            취소
          </button>
        ) : (
          <button
            onClick={() => completedBtn(item.id)}
            className="completed-btn"
          >
            완료
          </button>
        )}
      </div>
    </div>
  );
};
export default TodoItem;
