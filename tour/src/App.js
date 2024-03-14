
import { useState } from 'react';
import Tour from './components/Tour';
import data from './components/data';

import './App.css';

function App() {

  const [tour, setTour] = useState(data);

  function removetour(id) {
    const newTour = tour.filter(tour => tour.id != id)
    setTour(newTour);
  }

  return (
    <div>
      <h1>Tour And Travels</h1>
      <Tour tour={tour} removetour={removetour} />

    </div>
  );
}

export default App;
