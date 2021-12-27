import './App.css';
import { Routes, Route } from "react-router-dom";
import NotFound from './views/NotFound'
import Home from './views/Home'
import Mine from './views/Mine'

function App() {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/mine" element={<Mine />} />
    </Routes>
  );
}

export default App;
