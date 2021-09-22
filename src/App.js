import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

import './App.scss';
import Hero from './Components/Hero';




function App() {

  const [count, setCount] = useState(0);

  const handleHeroClick = () => {

  }
  return (

    <div className="App">
      <h1>React Memo</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Hero name="easy frontend" onClick={handleHeroClick} />
    </div>
  );
}

export default App;
