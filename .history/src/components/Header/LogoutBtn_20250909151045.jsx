import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        authservice.logout().then(() => {
            dispatch
        })
    }
  return (
    <div>
      
    </div>
  )
}

export default LogoutBtn
