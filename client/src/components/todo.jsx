import React, { useState, useEffect } from "react";
import "../styles/todo.css";
import axios from "axios";

const Main = () => {
  // Changed main to Main (capitalized component name)
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [delId, setDelId] = useState(""); // Changed delid to delId (camelCase)

  const handleAddTodo = () => {
    console.log(text);
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
        setDelId("");
        handleAllTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleAllTodos();
  }, []);

  return (
    <section>
      {/* Adding Headings Component */}
      <div className="title">CSTREAM TODO LIST</div>
      <div className="input-container">
        <div className="userinput">
        {/* Input Text Area - Basic Best Practices */}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="ENTER YOUR NOTES"
            minLength="10"
            maxLength="50"
          />
          <div className="btn" onClick={handleAddTodo}>
            ADD
          </div>
        </div>
      </div>
      <div className="displaytodo">
        {data.map((e) => (
          <div className="cart" key={e._id}>
            <div className="notes">{e.notes}</div>
            <div className="del" onClick={() => handleDelete(e._id)}>
              Delete
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;
