import Home from './pages/Home.page';
import AllProductsPage from './pages/products/AllProducts.page';
import ToteBagsPage from './pages/products/Totebag.page';
import BackpackPage from './pages/products/Backpack.page';
import BagPage from './pages/products/Bag.page';
import CartPage from './pages/Cart.page';
import SingleProductPage from './pages/singleproduct/SingleProduct.page';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/allproducts" element={<AllProductsPage />} />
              <Route path="/totebag" element={<ToteBagsPage />} />
              <Route path="/backpack" element={<BackpackPage />} />
              <Route path="/bag" element={<BagPage />} />
              <Route path="/product/:id" element={<SingleProductPage />} />
              <Route path="/cart" element={<CartPage />} />
          </Routes>
    </div>
  );
}

export default App;
