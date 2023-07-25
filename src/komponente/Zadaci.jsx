import React, { useState } from 'react';

const Zadaci = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Napraviti to-do aplikaciju', completed: false },
    { id: 2, text: 'Napisati dizajn za komponentu Zadaci', completed: false },
    { id: 3, text: 'Dodati stilove za to-do listu', completed: false },
  ]);

  const handleTaskToggle = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <span>{task.text}</span>
          <div>
            <button className={`tick ${task.completed ? 'completed' : ''}`} onClick={() => handleTaskToggle(task.id)}>
              <i className="fa fa-check"></i>
            </button>
            <button className="cross" onClick={() => handleTaskToggle(task.id)}>
              <i className="fa fa-times"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Zadaci;
