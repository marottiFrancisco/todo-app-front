import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Button} from './components/Button'

function App() {
  const [count, setCount] = useState(5);
  
  const modificarContador = (valor) => {
    setCount (count + valor)
  }

  return (
    <div className="App">
      <h1>Contador</h1>
      <p>El valor del contador es: {count}</p>

      <Button accion={()=>modificarContador(1)}></Button>
      <Button accion={()=>modificarContador(-1)}></Button>
      

    </div>
  );
}

export default App;
