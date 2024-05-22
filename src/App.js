import './App.css';
import Linn from './Linn';

import LinnaPilt1 from './linn1.jpg'
import LinnaPilt2 from './linn1.jpg'
import LinnaPilt3 from './linn1.jpg'

const moreCities = [
  {
    nimi: 'Tallinn',
    riik: 'Eesti',
    markused: 'wrewdssdf'
  },
  {
    nimi: 'Pärnu',
    riik: 'Eesti',
    markused: 'wrewdssdf'
  },
  {
    nimi: 'Elva',
    riik: 'Eesti',
    markused: 'wrewdssdf'
  },
]

function App() {
  const moreCitiesJsx = moreCities.map((city) => <Linn nimi={city.nimi} riik={city.riik} />)
  return (
    <div className="App">
      <h1>Minu lemmiklinnad</h1>
      <Linn nimi="Pariis" riik="Prantsusmaa" markused="asdfasdfasd" pilt={LinnaPilt1} />
      <Linn nimi="Leon" riik="Prantsusmaa" markused="asdfasdfasd" pilt={LinnaPilt1}  />
      <Linn nimi="Toulouse" riik="Prantsusmaa" markused="asdfasdfasd" pilt={LinnaPilt1} />
      <Linn nimi="Berliin" riik="Saksamaa" markused="asdfasdfasd" />
      <Linn nimi="London" riik="Inglismaa" markused="asdfasdfasd" />
      <Linn nimi="Brighton" riik="Inglismaa" markused="kjhkjhkjhkjhkjh" />
      {moreCitiesJsx}

    </div>
  );
}

export default App;
