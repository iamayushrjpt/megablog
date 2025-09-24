import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { PostForm } from '../components'
import { useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPost] = useState(null)
    const {slug} = useParams();
    useEffect(() => {
        service.getPost()
    },[])
  return (
    <div>
      
    </div>
  )
}

export default EditPost
