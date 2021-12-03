import NavBar from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer"
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { CartView } from "./components/CartView/CartView"
import "./App.scss"
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      
      <NavBar />
      
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/detail" element={<ItemDetailContainer />} />
        <Route path="/category" element={<ItemDetailContainer />} />
        <Route path="/cartview" element={<CartView />} />
      </Routes>
      
      <Footer />

    </BrowserRouter>
  );
}

export default App;
