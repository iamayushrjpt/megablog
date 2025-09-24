import React from 'react'
import { useForm } from 'react-hook-form'
import service from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'

function PostForm({post}) {
    const {register, handleSubmit, watch, control, getValues, setValue} =  useForm({
        defaultValues: {
            title: post?.title || "",
            content: post?.content || "",
            slug: post?.$id || "",
            status: post?.status || "active"
        }
    })

    const navigate = useNavigate()
    const 
  return (
    <div>
      
    </div>
  )
}

export default PostForm
