import './App.css';

import { Title } from './components/Title';
import { AddTodo } from './components/AddTodo';
import { Todos } from './components/Todos';

function App() {
  return (
    <div className='App'>
      <div>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>
      <div>
        <Todos />
      </div>
    </div>
  );
}
export default App;
