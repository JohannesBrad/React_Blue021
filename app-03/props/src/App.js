// import logo from './logo.svg';
import './App.css';
import Comentario from './components/Comentario';
import HeroProps from './components/HeroProps';
import Saludo from './components/Saludo';

function App() {
  return (
    <div>
      <HeroProps/>
      
      <Comentario 
      urlImag = "https://i.picsum.photos/id/370/200/200.jpg?hmac=HT9dVkM8BnOVYNnQU3Kiehyb9hJUPrehSqcOHXrq_y0"
      persona = 'Juan'
      comentario = "lorem"
      />

      <Comentario 
      urlImag = "https://i.picsum.photos/id/370/200/200.jpg?hmac=HT9dVkM8BnOVYNnQU3Kiehyb9hJUPrehSqcOHXrq_y0"
      persona = 'Juan'
      comentario = "lorem"
      />

      <Comentario 
      urlImag = "https://i.picsum.photos/id/370/200/200.jpg?hmac=HT9dVkM8BnOVYNnQU3Kiehyb9hJUPrehSqcOHXrq_y0"
      persona = 'Juan'
      comentario = "lorem"
      />
  

    </div>
  );
}

export default App;
