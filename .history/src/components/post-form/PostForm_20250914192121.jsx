import React from 'react'
import { useForm } from 'react-hook-form'

function PostForm({post}) {
    const {register, handleSubmit, setValue} =  useForm({
        defaultValues: {
            t
        }
    })
  return (
    <div>
      
    </div>
  )
}

export default PostForm
