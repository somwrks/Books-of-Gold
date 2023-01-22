import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Main/Header"
import Navbar from "./components/Main/Navbar"
import Footer from "./components/Main/Footer"
import Shop from "./components/Main/Shop"
import Login from "./screens/Login"
import RegisterPageScreen from "./screens/RegisterPage"
import CartScreen from "./screens/CartScreen"
import PaymentScreen from "./screens/PaymentScreen"
import PlaceOrder from './screens/PlaceOrder';
import MyOrders from './screens/MyOrders';
import ProductDetailsPage from './screens/ProductDetailsPage';
import Contact from './components/Main/Contact';
import Error from './components/LoadingError/Error';

function App() {
  return (
    <div className="p-0 m-0">
      <Router>
      <Navbar/>
      <Routes>
      <Route path={"/"} component={Header} exact/>
      <Route path={"/register"} component={RegisterPageScreen} />
      <Route path={"/login"} component={Login} />
      <Route path={"/shop"} component={Shop} />
      <Route path={"/products/:id"} component={ProductDetailsPage} />
      <Route path={"/cart/:id?"} component={CartScreen} />
      <Route path={"/order"} component={MyOrders} />
      <Route path={"/placeorder"} component={PlaceOrder} />
      <Route path={"/payment"} component={PaymentScreen} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"*"} component={Error} />
      </Routes>
      <Footer/>
      </Router>

    </div>
  );
}

export default App;
