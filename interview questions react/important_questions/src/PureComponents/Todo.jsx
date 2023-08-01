import React, { useCallback, useState } from "react";
import TodoItems from "./TodoItems";
import TodoElements from "./TodoElements";

const Todo = () => {
  //   const details = [
  //     { id: 1, name: "anmol", role: "devaloper" },
  //     { id: 2, name: "tanya", role: "devaloper" },
  //     { id: 3, name: "raksha", role: "devaloper" },
  //   ];
  const [data, setData] = useState("");
  const [details, setDetails] = useState([
    { id: 1, name: "anmol", role: "devaloper" },
    { id: 2, name: "tanya", role: "devaloper" },
    { id: 3, name: "raksha", role: "devaloper" },
  ]);
  function handleChange(e) {
    setData(e.target.value);
  }
  const handeDelete = useCallback((id) => {
    const collectdata = details.map((ele, i) => {
      return ele.id !== id;
    });
  }, []);
  console.log(data);
  return (
    <div>
      <input type="text" placeholder="Enter todo" onChange={handleChange} />
      {details.map((ele, i) => {
        return <TodoItems {...ele} key={i} handeDelete={handeDelete} />;
      })}
      {/* <TodoElements setData={setData} todo={data} /> */}
    </div>
  );
};

export default Todo;
