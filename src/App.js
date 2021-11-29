import NavBar from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemCount } from "./components/ItemCount/ItemCount";
import "./App.scss"

function App() {
  return (
    <div className="App">
        <NavBar />

        <ItemListContainer greeting="hola Coder"/>

        <ItemCount stock={20} initial={10}/>

        <Footer />
    </div>
  );
}

export default App;
