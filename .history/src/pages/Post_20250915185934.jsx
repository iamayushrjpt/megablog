import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Post() {
  const [post, setPost] = useState(null)
  const {slug} = useParams();
  const navigate = useNavigate();

  const usserData = UseSele
  return (
    <div>
      
    </div>
  )
}

export default Post
