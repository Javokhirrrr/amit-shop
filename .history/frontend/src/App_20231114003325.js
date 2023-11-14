import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Outlet, Route } from 'react-router-dom';
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
         <Route path='/' element={<Home />} />
        <Route path='menu' element={<Menu />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        {/* Outlet komponentini qo'shing */}
        <Outlet/>
      </main>
   </div>
  );
}

export default App;
