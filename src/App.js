import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Extras from './Components/Extras/Extras';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/extras" element={<Extras />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
