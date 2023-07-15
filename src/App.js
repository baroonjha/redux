import logo from './logo.svg';
import './App.css';
import { Counter } from './redux/slice/counter/Counter'


function App() {
  return (
    <>
    <h2>Counter</h2>
    <Counter />
    </>
  );
}

export default App;
