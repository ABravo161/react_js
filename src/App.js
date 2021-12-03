import NavBar from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer"
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import "./App.scss"
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";

function App() {
  return (
    <div className="App">
        <NavBar />

        <ItemDetailContainer />

        <ItemListContainer />

        <Footer />
    </div>
  );
}

export default App;
