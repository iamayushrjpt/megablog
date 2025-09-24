import React from 'react'
import { useForm } from 'react-hook-form'

function PostForm({post}) {
    const {register, handleSubmit, watch, control, getValues, setValue} =  useForm({
        defaultValues: {
            title: post.title 
        }
    })
  return (
    <div>
      
    </div>
  )
}

export default PostForm
