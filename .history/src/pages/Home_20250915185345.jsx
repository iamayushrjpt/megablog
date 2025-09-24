import React, { useState } from 'react'
import service from '../appwrite/config'
import { useEffect } from 'react'

function Home() {
  const [post, setPosts] = useState([])

  useEffect(() => {
    service.getPosts().then((post) => {
      if(post){
        setposts(post)
      }
    })
  },[])
  return (
    <div>
      
    </div>
  )
}

export default Home
