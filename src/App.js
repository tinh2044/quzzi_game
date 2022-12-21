import { useState } from 'react';
import './App.css';
import Guide from './components/Guide';
import Home from './components/Home';

function App() {
  const [showHome, setShowHome] = useState(false)
  return (
    <div className="App">
      {
        showHome ? <Home /> : <Guide setShowHome={setShowHome} />
      }

    </div>
  );
}

export default App;
