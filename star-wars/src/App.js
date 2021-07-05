import {useState, useEffect} from 'react';
import Sidebar from './components/Sidebar';

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
        </Switch>

      </div>

    </Router>
      
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
