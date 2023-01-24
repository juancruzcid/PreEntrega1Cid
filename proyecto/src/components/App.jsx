import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import LoremEjemplo from './ItemListContainer/LoremEjemplo'


function App() {
  return (
    <>
      <Navbar/>        
      <ItemListContainer contenido={<LoremEjemplo/>}/>
    </>
  );
}

export default App;
