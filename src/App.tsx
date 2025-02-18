import './App.css'
import User from './Components/User'
import { ColorContext } from './context/ColorContext'
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import ToDoTask from './Components/ToDoTask';
import ContactForm from './Components/ContactForm';


export default function App() {
  const colors = useContext(ColorContext)
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`App ${theme}`}>
        <ColorContext.Provider value={colors}>
          <h1>This is a default app !</h1>
          <User userName="my username" password="my password"/>
          <hr />
          <ToDoTask />
          <hr />
          <ContactForm />
        </ColorContext.Provider>
    </div>
  );
}

