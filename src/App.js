import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Products from './Pages/Products/Products';
import Checkout from './Pages/Checkout/Checkout';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Register from './Pages/Login/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/explore">
                <Products />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path="/checkout/:id">
                <Checkout />
              </PrivateRoute>
              <Route exact path="/">
                <Home />
              </Route>

            </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
