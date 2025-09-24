import React, {useState} from 'react'
import {login} from '../store/authSlice'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import authservice from '../appwrite/auth'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const [register, handlesubmit] = useForm()

    const login = async(data) => {
        setError('');
        try {
            const user = authservice.login(data)
            if(user){
                dispatch(login)
            }
        } catch (error) {
            setError(error)
        }
    }

  return (
    <div>
      
    </div>
  )
}

export default Login
