// Import CSS
import '../src/css/style.css';

// Import Pages
import Home from "./pages/Home";
import Choosing from './pages/Choosing';
import TheGame from './pages/TheGame';
import TheGameOver from './pages/TheGameOver';
import TheEndGame from './pages/TheEndGame';

// Import React Stuff
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/choosing' element={<Choosing />}></Route>
        <Route path='/theGame' element={<TheGame />}></Route>
        <Route path='/theEndGame' element={<TheEndGame />}></Route>
        <Route path='/theGameOver' element={<TheGameOver />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
