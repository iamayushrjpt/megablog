import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authservice from './appwrite/auth';
import { login } from './store/authSlice';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
   authservice.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
    }).finally
  },[])

  return (
    <>
     <h1>hello blog </h1>
    </>
  )
}

export default App
