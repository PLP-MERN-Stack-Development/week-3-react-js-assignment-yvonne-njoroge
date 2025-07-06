import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from './Button';

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (text.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    setText('');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filtered = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add new task"
          className="p-2 border rounded w-full"
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex gap-2">
        <Button variant="secondary" onClick={() => setFilter('all')}>All</Button>
        <Button variant="secondary" onClick={() => setFilter('active')}>Active</Button>
        <Button variant="secondary" onClick={() => setFilter('completed')}>Completed</Button>
      </div>

      <ul className="space-y-2">
        {filtered.map(task => (
          <li key={task.id} className="flex items-center justify-between border p-2 rounded">
            <span
              className={`flex-1 cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
              onClick={() => toggleComplete(task.id)}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
