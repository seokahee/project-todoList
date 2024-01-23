const TodoList = ({ list, setList }) => {
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
    <div className="todo-list-div">
      <h1>🔥Working</h1>
      <div className="workingList-div">
        {list
          .filter((item) => !item.isDone)
          .map((item) => {
            return (
              <div key={item.id} className="todo-div">
                <div className="todo-content-div">
                  <div className="title-div">{item.title}</div>
                  <div className="content-div"> {item.content}</div>
                  <div className="regDate-div"> 등록일 {item.regDate}</div>
                  <div className="buttons-div">
                    <button
                      onClick={() => removeBtn(item.id, item.title)}
                      className="remove-btn"
                    >
                      삭제
                    </button>
                    <button
                      onClick={() => completedBtn(item.id)}
                      className="completed-btn"
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
      <div className="doneList-div">
        {list
          .filter(function (item) {
            return item.isDone;
          })
          .map(function (item) {
            return (
              <div key={item.id} className="todo-div">
                <div className="todo-content-div">
                  <div className="title-div">{item.title}</div>
                  <div className="content-div"> {item.content}</div>
                  <div className="regDate-div"> 등록일 {item.regDate}</div>
                  <div className="buttons-div">
                    <button
                      onClick={() => removeBtn(item.id, item.title)}
                      className="remove-btn"
                    >
                      삭제
                    </button>
                    <button
                      onClick={() => completedBtn(item.id)}
                      className="cancel-btn"
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
  );
};
export default TodoList;
