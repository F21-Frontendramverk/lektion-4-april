import './App.css';

import TodoItem from './components/TodoItem';

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

  return (
    <div className="App">
      <ul>
        {/* <TodoItem task="Köp kaffe" />
        <TodoItem task="Köp kaka" />
        <TodoItem task="Brygg kaffe" />
        <TodoItem task="Drick kaffe" /> */}
        { todoItems }
      </ul>
    </div>
  );
}

export default App;
