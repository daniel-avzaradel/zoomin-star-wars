import './styles/App.css'
import {useState, useEffect} from 'react';

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

  console.log(films);

  return (
    <div>
      <h1>STAR WARS</h1>
    </div>
  );
}

export default App;
