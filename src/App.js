
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />

        
      </Routes>
     
    </div>
  );
}

export default App;
