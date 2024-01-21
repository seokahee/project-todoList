const List = ({ item, removeBtn }) => {
  return (
    <div key={item.id} className="listDiv">
      <div>{item.title}</div>
      <div> {item.content}</div>
      <button onClick={() => removeBtn(item.id)}>삭제</button>
    </div>
  );
};

export default List;
