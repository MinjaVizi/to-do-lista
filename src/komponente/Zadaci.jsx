import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

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
    <div>
      <h2>
        <Link to="/to-do-lista">To-do lista</Link> {/* Use Link instead of anchor tag */}
      </h2>
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
    </div>
  );
};

export default Zadaci;

