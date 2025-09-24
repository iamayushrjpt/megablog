import React, { useState } from 'react'
import { login as authlogin } from '../store/authSlice'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import authservice from '../appwrite/auth'
import { Button, Logo, Input } from './index'

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm()

    c
    return (
        <div>

        </div>
    )
}

export default Signup
