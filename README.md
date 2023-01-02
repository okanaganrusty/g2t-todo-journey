# Todo Application

## Description

You'll be building a todo application.  Building a todo application is a common way to learn about interacting with your framework and language.  A todo application should at a minimum implement the following actions:

* Create new todo tasks
* Display all todo tasks (allowing the user to filter the tasks based on their completion state { completed, incomplete })
* Complete todo tasks

After building the todo application, we will extend the application to persist the tasks to a database.  This will allow the user to reload the page and still be able to see the tasks.

## Module 1: Project initialization

### Create a new react application

At the shell, we are going to run:

```bash
npx create-react-app@latest todo-frontend
```

This will create a new react application, once this command has completed and returned back to the prompt, you will have a directory called `todo-frontend`.

### Understanding the project layout

The following files from the project directory (relative pathnames to your project)

1. `public/index.html`: HTML page for the project.

    When run `npm start` and the server launches a new web browser, the web browser will send a `GET /` HTTP request to `https://localhost:3000`.  Because there is file being requested by the web browser, the web server will respond with the default content from `index.html`.  Bootstrapping the application.

1. `src/index.js`: JavaScript component and initial entrypoint into this react application.

    All react applications have an `index.js` entrypoint.

1. `src/index.css`: Stylesheet (css) for the entire project.

    This stylesheet is used in `index.js`, which mounts react.js application.  Therefore, all CSS defined in this file affects all subcomponents.

1. `src/App.js`: JavaScript component definition, implementing the `<App />` component.

    Implements the `<App />` components and returns the HTML content that the component should render.  This is also known as JSX in react.js, which is a special type of HTML that allows the react applications to dynamically inject components.

1. `src/App.css`: Stylesheet (css) for the App.js component.

    This stylesheet is used in `App.js`, which renders the `<App />` component.  Any changes made in this CSS file will only affect the `<App />` component.

1. `src/App.test.js`: JavaScript integration tests to validate the application component is working as expected.
 
    These tests are run by using the `npm test` command, and are written in JavaScript.

1. `src/reportWebVitals.js`: Reports web vitals of the project to the console and browser.

    This file is not needed for our project, but is included for development and debugging purposes.

1. `src/setupTests.js`: Setup script for testing react components.

1. `src/logo.svg`: React logo in SVG format.

## Module 2: Start building the todo application components

1. Create an two empty files called:

    * `src/Todo.css`: Todo component stylesheet (css)
    * `src/Tasks.css`: Tasks component stylesheet (css)

1. Create a new file called `src/Todo.js` this will be the component that renders an individual todo item.

  ```javascript
  import './Todo.css';

  function Todo({ id, title, completed}) {
    return (
      <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>{completed}</td>
      </tr>
    );
  }

  export default Todo;
  ```

1. Create a new file called `src/Tasks.js` this will be our main application component.

    This component will be responsible for displaying our todo items.  In this example, we will display a list of pre-defined todo items for our development process.

    Once we have finished, we will remove the pre-defined todo items.

  ```javascript
  import './Tasks.css';
  import Todo from './Todo';

  const tasks = [
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
      </div>
    );
  }

  export default Tasks;
  ```

1. Import the following content into your `src/App.js` file into your `<App />` component, so that when we render the page, it will render our `<Tasks />` component.

  ```javascript
  import './App.css';
  import Tasks from './Tasks';

  function App() {
    return (
      <div className="App">
          <Tasks />
      </div>
    );
  }

  export default App;
  ```

1. After we have completed the tasks above, we will run the application by executed `npm start` in the project root directory.

  If all compiliation is successful, then the application will launch a web browser your local machine, and will display your todo items

  ```bash
  npm start
  ```

## Module 3: Style the components

Apply some basic table styling to the components so that they are cleaner to identify individual tasks.

We know that our application hierarchy is, and that the styles cascade downstream to the child components.  So, for now, we will apply our styles inside of `src/index.css`

* Our react rendering source `src/index.js` inherits styles from `src/index.css`.
* Our `<App />` component inherits styles from `src/App.css` stylesheet.
* Our `<Tasks />` component use the `src/Tasks.css` stylesheet.
* Our `<Todo />` components use the `src/Todo.css` stylesheet.

1. Open up `src/index.css` and add the styles:

  This will set the default styles for any subsequent tables created on the pages of this application.  If you want to scope the styles to a certain component, then you can choose to define these styles in a different stylesheet (eg. `src/Tasks.css`, `src/Todo.css`, or `src/App.css`)

  Colorization is not my area of expertise.  Feel free to customize the colors to your choosing.

  ```stylesheet
  .App {
    width: 500px;
    margin: 0 auto;
    padding: 30px;
  }

  table {
    width: 100%;
  }

  td, th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #723d46;
    color: white;
  }
  ```

## Module 4: Add a form to create a new todo task

Using HTML forms, we will allow the user to create new tasks.  This data will not persist, so if you refresh your web browser, you will loose the data.

1. Create a new form component, lets call this `src/TodoForm.js`

  ```javascript
  import { useRef } from "react";

  function TodoForm({ addTodo }) {
    const inputRef = useRef();

    function handleSubmit(e) {
      e.preventDefault();

      addTodo(inputRef.current.value);
      inputRef.current.value = "";
    }

    return (
      <form onSubmit={handleSubmit}>
        <h1>Add a new task</h1>

        <input
          type="text"
          ref={inputRef}
          placeholder="What needs to be done?"
        />

        <button type="submit">Add</button>
      </form>
    );
  }

  export default TodoForm;
  ```

1. Update the `src/Tasks.js` source to include the new `src/TodoForm.js` component and render the component to the browser.

  You'll see that we've:
  
  1. Renamed the `tasks` from to `initialTasks`
  2. Added `useState` to keep track of the state of the tasks.
  3. Added a function called `setTasks` to update the tasks when the submit button is clicked on the todo form.

  ```javascript
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
  ```

