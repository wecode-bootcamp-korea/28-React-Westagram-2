const Comment = props => {
  console.log(props);
  return (
    <div className="comment">
      <span>{props.name}</span>
      <span> {props.comment}</span>
      {/* <span>42분</span> */}
      {/* <span>더 보기</span> */}
    </div>
  );
};

export default Comment;
