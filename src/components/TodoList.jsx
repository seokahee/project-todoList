import TodoItem from "./TodoItem";

const TodoList = ({ list, setList }) => {
  // 삭제 이벤트
  const removeBtn = (id, title) => {
    if (window.confirm(`"${title}" 일정을 삭제하시겠습니까?`)) {
      alert(`"${title}" 일정이 삭제되었습니다.`);
      const filteredList = list.filter((list) => list.id !== id);
      return setList(filteredList);
    }
    alert("삭제가 취소되었습니다.");
    return;
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
  // select의 value에 따라 sort로 정렬하는 함수 작성

  const sortFunc = (list = {
    // 옵션 값에 따라  솔트로 데드라인으로 정렬하고 뿌리는걸 어캐할지 생각해보자 너무졸려어엉우
  });
  return (
    <div className="todo-list-div">
      <select className="select-box">
        <option value="">----- todoList 정렬 옵션 -----</option>
        <option value="asc">마감날짜 오름차순 정렬</option>
        <option value="desc">마감날짜 내림차순 정렬</option>
      </select>
      <h1>🔥Working</h1>
      <div className="list-div">
        {/* isDone의 상태에 따라 todo가 반환된다. */}
        {list
          .filter((item) => !item.isDone)
          .map((item) => {
            return (
              // 필터링된 div 컴포넌트와 연결
              <TodoItem
                item={item}
                removeBtn={removeBtn}
                completedBtn={completedBtn}
              />
            );
          })}
      </div>
      <h1>🌈Done!</h1>
      <div className="list-div">
        {list
          .filter(function (item) {
            return item.isDone;
          })
          .map(function (item) {
            return (
              // 필터링된 div 컴포넌트와 연결
              <TodoItem
                item={item}
                removeBtn={removeBtn}
                completedBtn={completedBtn}
              />
            );
          })}
      </div>
    </div>
  );
};
export default TodoList;
