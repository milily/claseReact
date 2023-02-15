import './App.css';
import Header from './components/header/Header'
import Contador from './components/contador/Contador'

function App() {
  const nombre = 'hola React'
  return (
    <div>
      <Header />
      <Contador 
        title={nombre}/>
    </div>
  );
}

export default App;
