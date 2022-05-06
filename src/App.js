import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error404 from './pages/error_404/Error404';

//import pages
import HomePage from './pages/HomePage';
import Login from './pages/Login.js';
import Pokemon from './pages/Pokemon';



//import hoooks





//import all services

function App() {
  
  
  
  
  
  return (
    <div className="App">
      <Routes>
        <Route   path='/' element={<Login />} />
        <Route   path='/pokedex' element={<HomePage />} />
        <Route   path='/pokedex/:id' element={<Pokemon />} />
        <Route   path='*'element={<Error404 />} />
      </Routes> 
      <footer className='footer'>
        fin del juego 
      </footer>
    </div>
  );
}

export default App;
