import './App.css';
import Add from './components/Add';
import Navbar from './components/Navbar';
import AllUser from './components/Alluser';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import EditUser from './components/EditUser';
import Footer from './components/Footer';
 
function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<AllUser />} />
        <Route path='/all' element={<AllUser />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:id' element={<EditUser />} />

      </Routes>
    </BrowserRouter>
    </div>

    <Footer />

    </div>
  );
}

export default App;
