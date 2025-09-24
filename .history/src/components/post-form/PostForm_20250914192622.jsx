import React from 'react'
import { useForm } from 'react-hook-form'
import service from '../../appwrite/config'

function PostForm({post}) {
    const {register, handleSubmit, watch, control, getValues, setValue} =  useForm({
        defaultValues: {
            title: post?.title || "",
            content: post?.content || "",
            slug: post?.$id || "",
            status: post?.status || "active"
        }
    })

    const navigate = 
  return (
    <div>
      
    </div>
  )
}

export default PostForm
