import React, { useState } from 'react'
import service from '../appwrite/config'
import { useEffect } from 'react'

function Home() {
  const [post, setposts] = useState([])

  useEffect(() => {
    service.getPosts().then((post) => )
  },[])
  return (
    <div>
      
    </div>
  )
}

export default Home
