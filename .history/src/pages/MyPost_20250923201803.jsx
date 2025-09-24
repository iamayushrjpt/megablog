import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { useSelector } from 'react-redux'

function MyPost() {
    const [post, setPost] = useState([])
    const userData = useSelector((state) => state.auth.userData)
    
    useEffect(() => {
        service.getPosts([]).then((post) => {
            if( post.userId === userData.$id){
                setPost(post)
            }
        })
    })
    
  return (
    <div>
      {post.map((post) => (
         <div key={post.$id} className='p-2 lg:w-1/4 md:w-1/1'>
            <Card {...post} />
        </div>
      ))}
    </div>
  )
}

export default MyPost
