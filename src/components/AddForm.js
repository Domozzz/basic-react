import React, { useState } from "react";
import "./AddForm.css";

function AddForm(props) {
  const { students, setStudent } = props;
  const [name, setName] = useState("");
  function savestudent(e) {
    e.preventDefault();
    if (!name) {
      alert("กรุณาป้อนข้อมูล");
    } else {
      const newStudent = {
        id: Math.floor(Math.random() * 1000),
        name: name,
      };
      setStudent([...students, newStudent]);
      setName("");
    }
  }
  return (
    <section className="container">
      <form onSubmit={savestudent}>
        <label>ชื่อนักเรียน</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="btn-add">
          บันทึก
        </button>
      </form>
    </section>
  );
}

export default AddForm;
