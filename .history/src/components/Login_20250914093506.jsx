import React, {useState} from 'react'
import {login} from '../store/authSlice'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const [register, handlesubmit] = useForm()

    const login = async(data) => {
        setError('');
        try {
            
        } catch (error) {
            
        }
    }

  return (
    <div>
      
    </div>
  )
}

export default Login
