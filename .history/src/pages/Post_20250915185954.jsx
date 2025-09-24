import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

function Post() {
  const [post, setPost] = useState(null)
  const {slug} = useParams();
  const navigate = useNavigate();

  const usserData = useSelector((state) => state.auth)
  return (
    <div>
      
    </div>
  )
}

export default Post
