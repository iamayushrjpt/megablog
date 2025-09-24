import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'

function MyPost() {
    const [post, setPost] = useState(null)
    // const isAuthor = post && userData ? post.userId === userData.$id : false;
    useEffect(() => {
        service.getPosts().then((post) => {
            setPost
        })
    })
  return (
    <div>
      
    </div>
  )
}

export default MyPost
