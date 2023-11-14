import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Outlet } from 'react-router-dom';

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
        <Outlet/>
      </main>
   </div>
  );
}

export default App;
