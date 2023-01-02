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