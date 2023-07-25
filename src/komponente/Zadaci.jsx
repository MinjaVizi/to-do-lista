import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Zadaci = ({ tasks }) => {
  const [taskList, setTaskList] = useState(tasks); // Rename the state variable to taskList

  const handleTaskToggle = (id) => {
    const updatedTasks = taskList.map((task) => { // Use the renamed state variable taskList
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTaskList(updatedTasks); // Use the renamed state setter setTaskList
  };

  const hasTasks = taskList.length > 0; // Use the renamed state variable taskList

  return (
    <div>
      <h2>
        <Link to="/to-do-lista">To-do lista</Link>
      </h2>
      {hasTasks ? (
        <ul className="task-list">
          {taskList.map((task) => ( // Use the renamed state variable taskList
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
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f2f2f2', height: '100vh', justifyContent: 'center' }}>
          <p style={{ fontSize: '20px', color: '#666', margin: '1em' }}>Trenutno nema neodrađenih zadataka! Kako biste kreirali novi zadatak kliknite na link <Link to="/kreiraj-zadatak">"Kreiraj zadatak"</Link>.</p>
        </div>
      )}
    </div>
  );
};

export default Zadaci;
