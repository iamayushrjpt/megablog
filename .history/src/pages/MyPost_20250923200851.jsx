import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import us

function MyPost() {
    const [post, setPost] = useState([])
    // const isAuthor = post && userData ? post.userId === userData.$id : false;
    useEffect(() => {
        service.getPosts().then((post) => {
            if( post.userId === userData.$id)
        })
    })
  return (
    <div>
      
    </div>
  )
}

export default MyPost
