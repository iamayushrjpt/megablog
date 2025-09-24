import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import service from '../appwrite/config';

function Post() {
  const [post, setPost] = useState(null)
  const {slug} = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData)
  const isAuthor = post && userData ? userData.$id === post.userId : false;

  useEffect(() => {
    if(slug){
      service.getPost().then((post) => {
        if(post){
          setPost(post)
        } else{
          navigate("/");
        } 
      })
    }else{
      navigate("/");
    }
  },[slug, navigate])

  const deletePost = () => {
    service.deletePost(post.$id)
  }
  return (
    <div>
      
    </div>
  )
}

export default Post
