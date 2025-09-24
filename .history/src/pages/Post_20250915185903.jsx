import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Post() {
  const [post, setPost] = useState(null)
  const {slug} = useParams();
  
  return (
    <div>
      
    </div>
  )
}

export default Post
