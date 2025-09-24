import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { PostForm } from '../components'

function EditPost() {
    const [post, setPost] = useState(null)
    const {slug}
    useEffect(() => {
        service.getPost()
    },[])
  return (
    <div>
      
    </div>
  )
}

export default EditPost
