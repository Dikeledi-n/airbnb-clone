import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/layout/Header';
import './App.css';
import Home from './Components/Home';
import Footer from './Components/Footer';
import SearchPage from './Components/SearchPage';
import Modal from "./Components/Modal";
import Login from './Components/Login';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Modal />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
