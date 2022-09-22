import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BrandAdd from './pages/Brand&Stockreq/BrandAdd';
import BrandEdit from './pages/Brand&Stockreq/brandEdit';
import BrandStockreqDashboard from './pages/Brand&Stockreq/Product Brand & Stock request Management';


function App() {
  return (
  <BrowserRouter>
  <Routes>

  <Route path='/' element={<BrandStockreqDashboard/>} />
        <Route path='/brandAdd' element={<BrandAdd />} />
        <Route path='/brandEdit' element={<BrandEdit />} />

  </Routes>
  
  </BrowserRouter>
    
  );
}

export default App;
