import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Footer } from './components/Footer';
import { IKEAHomepage } from './components/pages/IKEAHomepage';
import { LoginPage } from './components/pages/LoginPage';
import { ProductDetailsPage } from './components/pages/ProductDetailsPage';
import { SearchResultPage } from './components/pages/SearchResultPage';
import { ShoppingCartPage } from './components/pages/ShoppingCartPage';
import { ShopPromPage } from './components/pages/ShopPromPage';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <IKEAHomepage />
        </Route>
        <Route path="/shop/promotion">
           <ShopPromPage />
           <Footer />
        </Route>
        <Route path="/products/:id">
          <ProductDetailsPage />
          <Footer />
        </Route>
        <Route path="/cart">
           <ShoppingCartPage />
           <Footer />
        </Route>
        <Route path="/search">
          <SearchResultPage />
          <Footer />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
