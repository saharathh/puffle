import Navbar from '../components/navbar/navbar.component';
import Annoucement from '../components/announcement/announcement.component';
import Hero from '../containers/hero/Hero.container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Categories from '../containers/categories/Categories.container';
import Pufflegirl from '../containers/pufflegirl/Pufflegirl.container';
import Footer from '../components/footer/Footer.component';
import LoginPage from '../pages/Login.page';
import RegisterPage from '../pages/Register.page';
import CheckoutPage from '../pages/checkout/Checkout.page';
import ProductList from '../components/product_list/Product_list.component';
import ProductPage from './Product.page';


const Home = () => {
  return (
      <>
        <Annoucement />
        <Navbar />
        <Hero />
        <Pufflegirl />
        <Categories />
        <ProductList header="สินค้าทั้งหมด" see_more_label="ดูสินค้าทั้งหมด" path="/allproducts"/>
        <Footer />
      </>
  );
}

export default Home;