import React, { useEffect } from 'react'
import service from '../appwrite/config'

function MyPost() {
    const [post, set]
    // const isAuthor = post && userData ? post.userId === userData.$id : false;
    useEffect(() => {
        service.getPosts()
    })
  return (
    <div>
      
    </div>
  )
}

export default MyPost
