import { useState } from 'react';

import './Tasks.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

const initialTasks = [
  {
    id: 1,
    title: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    title: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    title: 'Learn JavaScript',
    completed: false,
  },
  {
    id: 4,
    title: 'Learn React.js and Build a task app',
    completed: false,
  }
];

function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);

  function addTodo(task) {
    setTasks((tasks) => [
      {
        id: tasks.length + 1,
        title: task,
        completed: false,  
      }, ...tasks
    ]) 
  }
  
  return (
    <div className="Tasks">
      <table>
        <thead>
          <tr>
            <th>Todo ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>

        <tbody>
        {tasks.map((todo) => {
          return <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
        })}
        </tbody>
      </table>

      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default Tasks;