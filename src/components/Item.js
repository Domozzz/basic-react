import React from "react";
import "./Item.css";

function Item(props) {
  const { data, deleteStudent } = props;
  return (
    <>
      <li key={data.id} className={data.gender}>
        <p>
          {data.id} - {data.name}{" "}
        </p>
        <button onClick={() => deleteStudent(data.id)} className="delete">
          ลบข้อมูล
        </button>
      </li>
    </>
  );
}

export default Item;
