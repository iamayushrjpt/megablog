import React, {useState} from 'react'
import {login as authlogin} from '../store/authSlice'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import authservice from '../appwrite/auth'
import {Button, Logo, Input} from './index'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const {register, handlesubmit} = useForm()

    const login = async(data) => {
        setError('');
        try {
            const session = await authservice.login(data)
            if(session){
                const userData = await authservice.getCurrentUser();
                if(userData) dispatch(authlogin(userData))
            navigate("/")
            }
        } catch (error) {
            setError(error)
        }
    }

  return (
    <form onSubmit={handlesubmit(login)}>
        <Input
        label = "email"
        type= "email"
        placeholder = "enter email"
        {...register("email", {
            required: true,
             validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
        })}/>
         <Input
        label = "password"
        type= "password"
        placeholder = "enter password"
        {...register("password", {
            required: true,
            
        })}/>
        <Button
    </form>
  )
}

export default Login
