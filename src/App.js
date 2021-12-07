import "./App.scss"

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { CartProvider } from "./components/context/CartContext";
import { CartView } from "./components/CartView/CartView"
import { Checkout } from "./components/Checkout/Checkout"
import { Footer } from "./components/Footer/Footer"
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        
        <NavBar />
        
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="*" element={ <Navigate to="/" />} />
        </Routes>
        
        <Footer />

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
