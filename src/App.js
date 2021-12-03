import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer"
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { CartView } from "./components/CartView/CartView"
import "./App.scss"
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      
      <NavBar />
      
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="*" element={ <Navigate to="/" />} />
      </Routes>
      
      <Footer />

    </BrowserRouter>
  );
}

export default App;
