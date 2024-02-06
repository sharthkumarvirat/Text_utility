import logo from './logo.svg';
import './App.css';
import TextArea from './Components/TextArea';
import Navbar from './Components/Navbar';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }

  const switchh = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#6e8ca3";
      showAlert("dark mode has enabled ", "success");
    }
    else {

      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has enabled ", "success");

    }
  }
  return (
    <>
      <Navbar title="Textutiles" about="About us" mode={mode} switchh={switchh} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route  exact path='/' element={<TextArea showAlert={showAlert} heading="Enter the text" mode={mode} />} />
          <Route  exact path='/about' element={ <About mode={mode}/> } />
        </Routes>
      </div>
    
    </>
  );
}

export default App; 
