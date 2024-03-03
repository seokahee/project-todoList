import { findAllByAltText } from "@testing-library/react";
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

  return (
    <div className="todo-list-div">
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
// 이슈 테스트 주석
