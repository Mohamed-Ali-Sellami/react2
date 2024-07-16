import logo from './logo.svg';
import './App.css';
import Cercle from './cercle.js'
function App() {
const couleurs=["#61dafb", "#7FFF00","#8B008B","#B22222","#00FF00"]



  return (
    <div className="App">
      {couleurs.map((el) => <Cercle  data={el} /> )}
<Cercle/>
    </div>
  );
}

export default App;
