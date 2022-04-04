import './App.css';

import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

function App() {
  const todos = [
    { id: 0, task: 'Köp kaffe' },
    { id: 1, task: 'Köp kaka' },
    { id: 2, task: 'Brygg kaffe' },
    { id: 3, task: 'Drick kaffe' }
  ];

  const todoItems = todos.map((todo) => {
    return <TodoItem task={ todo.task } key={ todo.id } />
  });

  function addTodo(todoText) {
    const newTodo = {
      id: todos.length,
      task: todoText
    }

    todos.push(newTodo);
    console.log(todos);
  }

  return (
    <div className="App">
      <ul>
        { todoItems }
      </ul>
      <AddTodo addTodo={ addTodo } />
    </div>
  );
}

export default App;
