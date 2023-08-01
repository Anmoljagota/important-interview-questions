import React from "react";

const TodoItems = ({ name, role, id , handeDelete}) => {
  console.log(name, role);
  // console.log(data)
  return (
    <div>
      <span>{name}</span>
      <span style={{ marginLeft: "10px" }}>{role}</span>
      <button onClick={()=>handeDelete(id)}>Delete</button>
    </div>
  );
};

export default React.memo(TodoItems);
