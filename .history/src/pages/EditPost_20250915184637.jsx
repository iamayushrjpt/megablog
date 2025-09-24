import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, PostForm } from '../components'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPost] = useState(null)
    const {slug} = useParams();
    const navigate = useNavigate();

  useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return (
    <div>
      <Container>
        <PostForm post={post}/>
      </Container>
    </div>
  )
}

export default EditPost
