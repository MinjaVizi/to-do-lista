import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import JedanZadatak from './JedanZadatak';
import FiltriranjeZadataka from './FiltriranjeZadataka';

const Zadaci = ({ tasks }) => {
  const [taskList, setTaskList] = useState(tasks);
  const [filterOption, setFilterOption] = useState('svi'); // Track the selected filter option

  const handleTaskToggle = (id) => {
    const updatedTasks = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTaskList(updatedTasks);
  };

  const handleFilterChange = (filterOption) => {
    if (filterOption === 'zavrseni') {
      const filteredTasks = tasks.filter((task) => task.completed);
      setTaskList(filteredTasks);
    } else if (filterOption === 'nezavrseni') {
      const filteredTasks = tasks.filter((task) => !task.completed);
      setTaskList(filteredTasks);
    } else {
      setTaskList(tasks); // Show all tasks when "Svi zadaci" is selected
    }
    setFilterOption(filterOption); // Update the selected filter option
  };

  const showCompleted = filterOption === 'svi' || filterOption === 'zavrseni'; // Determine whether completed tasks should be shown

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <FiltriranjeZadataka filterTasks={handleFilterChange} />
      {taskList.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {taskList.map((task) => (
            <JedanZadatak
              key={task.id}
              task={task}
              handleToggleCompleted={handleTaskToggle}
              showCompleted={showCompleted} // Pass the showCompleted prop to JedanZadatak component
            />
          ))}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f2f2f2', height: '100vh', justifyContent: 'center' }}>
          <p style={{ fontSize: '20px', color: '#666', margin: '1em' }}>Trenutno nema neodrađenih zadataka! Kako biste kreirali novi zadatak kliknite na <Link to="/kreiraj-zadatak">kreiraj zadatak</Link>.</p>
        </div>
      )}
    </div>
  );
};

export default Zadaci;

