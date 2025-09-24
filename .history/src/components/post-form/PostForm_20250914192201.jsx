import React from 'react'
import { useForm } from 'react-hook-form'

function PostForm({post}) {
    const {register, handleSubmit, watch, control, getValues setValue} =  useForm({
        defaultValues: {
            
        }
    })
  return (
    <div>
      
    </div>
  )
}

export default PostForm
