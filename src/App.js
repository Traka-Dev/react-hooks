import './App.css';
import {Header} from './components/Header'
import {Characters} from './components/Characters'

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Traka was here!</h1>
      <Characters />
    </div>
  );
}

export default App;
