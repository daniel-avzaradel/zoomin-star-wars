import {useState, useEffect} from 'react';
import Sidebar from './components/Sidebar';
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
    <div className="App">
      <Sidebar films={films}/>
      <h1>STAR WARS</h1>
    </div>
  );
}

export default App;
