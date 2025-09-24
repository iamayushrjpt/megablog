import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authservice from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authservice.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex  flex-wrapflex-col min-h-screen content-between bg-white-400'>
      <div className='w-full block'>
        <div className="flex ">
        <Header />
        <main className="flex-grow">
         <Outlet/>
        </main >
        <Footer />
        </div>
      </div>
    </div>
  ) : null
}

export default App
