import Esenha from './components/valiLogin';
import Login from './components/Login';
import imagem from './assets/imgs/image.png';


function App() {
  return (
    <div className="App">
      <Login />
      <Esenha />
      <div className="layoutTraço">
        <div className="traço"></div>
        <img src={imagem} className="imagem"/>
        <img src={imagem} className="imagem"/>
      </div>
    </div>
  )
}

export default App
