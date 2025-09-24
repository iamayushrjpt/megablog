import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authservice from './appwrite/auth';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
   authservice.getCurrentUser()
    .then(() => {

    })
  },[])

  return (
    <>
     <h1>hello blog </h1>
    </>
  )
}

export default App
