import { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {

  const [contador, setContador] = useState(0);

  function handButtonClick() {
	setContador(contador + 1);
}
  return (
    <div className="App">
      <header className="App-header">
		<Header title={contador}/>
		<input type='button' value="Click me" onClick={handButtonClick} />
      </header>
    </div>
  );
}

export default App;
