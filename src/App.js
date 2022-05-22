import './App.css';
import Books from './components/Books/Books';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



function App() {
  return (

    <div className="App">

      <Router>
        <Header></Header>
        <Footer></Footer>

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/books">
            <Books></Books>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
