import './App.css';
import Linn from './Linn';
import Linn2 from './Linn2';
import Counter from './Counter';

import LinnaPilt1 from './linn1.jpg'
import LinnaPilt2 from './linn1.jpg'
import LinnaPilt3 from './linn1.jpg'
import { useState } from 'react';

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
  const [activeCity, setActiveCity] = useState(0);
  const moreCitiesJsx = moreCities.map((city, index) => (
    <div 
      onClick={() => setActiveCity(index)}
      className={activeCity === index ? 'nav-item nav-item__active' : 'nav-item'}
    >  
      <Linn2  nimi={city.nimi} />
    </div>
))
  return (
    <div className="App">
      <h1>Minu lemmiklinnad</h1>
      <div className='container'>
        <div className="leftPane">
          {moreCitiesJsx}
          <button onClick={() => setActiveCity(activeCity + 1)} >Next</button>
        </div>
        <div className='rightPane'>
        <Linn nimi={moreCities[activeCity].nimi} riik={moreCities[activeCity].riik} />
        </div>

      </div>
    </div>
  );
}

export default App;
