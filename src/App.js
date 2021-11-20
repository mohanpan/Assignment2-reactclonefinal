import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { IKEAHomepage } from './components/pages/IKEAHomepage';
import { LoginPage } from './components/pages/LoginPage';
import { ProductDetailsPage } from './components/pages/ProductDetailsPage';
import { SearchResultPage } from './components/pages/SearchResultPage';
import { ShoppingCartPage } from './components/pages/ShoppingCartPage';
import { ShopPromPage } from './components/pages/ShopPromPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <IKEAHomepage />
        </Route>
        <Route path="/shop/promotion">
           <ShopPromPage />
        </Route>
        <Route path="/products/:id">
          <ProductDetailsPage />
        </Route>
        <Route path="/cart">
           <ShoppingCartPage />
        </Route>
        <Route path="/search">
          <SearchResultPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
