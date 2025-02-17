import './App.css'
import User from './Components/User'
import { ColorContext } from './ColorContext'
import { useContext } from 'react';

function App() {
  const colors = useContext(ColorContext)
  return (
        <ColorContext.Provider value={colors}>
          <h1>This is a default app !</h1>
          <User userName="my username" password="my password"/>
        </ColorContext.Provider>
  );
}

export default App