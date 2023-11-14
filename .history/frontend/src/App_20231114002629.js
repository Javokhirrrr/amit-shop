import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Outlet } from 'react-router-dom';
import Home from './page/Home';
import Menu from './page/Menu';
import About from './page/About';
import Contact from './page/Contact';

function App() {
  return (
   <div>
      <Header/>
      <main className='pt-16'>
        {/* Route komponentlarini qo'shing */}
        <Outlet path='/' element={<Home />} />
        <Outlet path='menu' element={<Menu />} />
        <Outlet path='about' element={<About />} />
        <Outlet path='contact' element={<Contact />} />
        <Outlet/>
      </main>
   </div>
  );
}

export default App;
