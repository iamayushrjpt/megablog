import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { PostForm } from '../components'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPost] = useState(null)
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        service.getPost(slug).then((post) => {
            if(post){
                setPost(post);
            }
        })
    },[])
  return (
    <div>
      <Cont
    </div>
  )
}

export default EditPost
