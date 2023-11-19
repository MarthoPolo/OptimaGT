import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar'
import { Login } from './components/pages/Login';
import { Home } from './components/pages/Home';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
    </>
  )
}


export default App;
