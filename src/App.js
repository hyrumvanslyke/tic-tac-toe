import Square from './Square';
import './App.css';

function App() {
  const string = 'I love basketBall'
  return (
    <div className="App">
     <Square propVar={string}></Square>
    </div>
  );
}

export default App;
