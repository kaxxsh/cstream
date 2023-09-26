import React, { useState, useEffect } from "react";
import "../styles/todo.css";
import axios from "axios";

const Main = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState("");

  const handleAddTodo = () => {
    axios
      .post("http://localhost:3001/api/v1/notes", { notes: text })
      .then((res) => {
        console.log(res);
        setText("");
        handleAllTodos();
      })
      .catch((err) => console.log(err));
  };

  const handleAllTodos = () => {
    axios
      .get("http://localhost:3001/api/v1/notes")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/api/v1/notes/${id}`)
      .then((res) => {
        console.log(res);
        handleAllTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (id) => {
    const todoToEdit = data.find((e) => e._id === id);
    setText(todoToEdit.notes);
    setEditId(id);
  };

  const handleUpdateTodo = () => {
    axios
      .patch(`http://localhost:3001/api/v1/notes/${editId}`, { notes: text })
      .then((res) => {
        console.log(res);
        setText("");
        setEditId("");
        handleAllTodos();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    handleAllTodos();
  }, []);

  return (
    <section>
      <div className="title">CSTREAM TODO LIST</div>
      <div className="input-container">
        <div className="userinput">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="ENTER YOUR NOTES"
            minLength="10"
            maxLength="50"
          />
          <div
            className="btn"
            onClick={editId ? handleUpdateTodo : handleAddTodo}
          >
            {editId ? "Update" : "ADD"}
          </div>
        </div>
      </div>
      <div className="displaytodo">
        {data.map((e) => (
          <div className="cart" key={e._id}>
            <div className="notes">{e.notes}</div>
            <div className="btns">
              <div className="edit" onClick={() => handleEdit(e._id)}>
                Edit
              </div>
              <div className="del" onClick={() => handleDelete(e._id)}>
                Delete
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;
