import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [workingTodos, setWorkingTodos] = useState([
    { title: "React를 배워봅시다." }
  ]);

  // 할일 추가하기
  function AddTodoHandler() {
    if (!title) return;

    // 할일 목록(working)에 새로운 할일을 추가시킨다 -> 추가후엔 제목 내용 초기화.
    const newTodo = { title };
    setWorkingTodos([...workingTodos, newTodo]);
    setTitle("");
  }

  return (
    <div className="todo-list">
      <div className="input-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn" onClick={AddTodoHandler}>
          추가하기
        </button>
      </div>
      <div className="header">My Todo List</div>
      <div className="working">
        <div className="working-cards">
          {workingTodos.map((todo, index) => (
            <div key={index} className="card">
              <h4>{todo.title}</h4>
              <p>{todo.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
