import React, { useState } from "react";
import "./StudentList.css";
import Item from "./Item";
function StudentList(props) {
  const { students, deleteStudent } = props;

  const [show, setShow] = useState(true);

  return (
    <div>
      <ul>
        <div className="header">
          <h1>จำนวนนักเรียน ({students.length})</h1>
          <button onClick={() => setShow(!show)}>
            {show ? "ซ่อน" : "แสดง"}{" "}
          </button>
        </div>
        {show &&
          students.map((data) => (
            <Item key={data.id} data={data} deleteStudent={deleteStudent} />
          ))}
      </ul>
    </div>
  );
}

export default StudentList;
