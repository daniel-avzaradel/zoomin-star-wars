import {useState, useEffect} from 'react';
import Sidebar from './components/Sidebar';
import Film from './components/Film';
import Home from './components/Home';
import Favorites from './components/Favorites';

import {
  BrowserRouter as Router,
  Switch,
  Route } from "react-router-dom";

import './styles/App.css'

function App() {

  const [films, setFilms] = useState([])
  const url = 'https://swapi.dev/api/films'

  useEffect(() => {
    async function fetchData() {
        let response = await fetch(url);
        let res = await response.json();
        setFilms(res.results)
    }
    fetchData();
  }, [])

  return (

    <Router>
      <div className="App">
        <Sidebar films={films}/>

        <Switch>
          
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/films/:id">
            <Film film={films} />
          </Route>
          <Route path="/favorites">
            <Favorites films={films} />
          </Route>
        </Switch>

      </div>

    </Router>
      
  );
}

export default App;
