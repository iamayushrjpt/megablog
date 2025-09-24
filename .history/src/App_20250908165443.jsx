import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authservice from './appwrite/auth';
import { login, logout } from './store/authSlice';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
   authservice.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}));
      }else{
        dispatch(logout());
      }
    })
    .finally(() => setLoading(false))
  },[])

  return !loading ? (
    <>
     <h1>hello blog </h1>
    </>
  ) :
}

export default App
