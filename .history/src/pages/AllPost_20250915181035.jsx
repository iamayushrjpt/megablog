import React, {useState, useEffect} from 'react'
import service from '../appwrite/config'
import {Cont}

function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        service.getPosts([]).then((post) => {
            if(post){
                setPosts(post)
            }
        })
    },[])
  return (
    <div>
      
    </div>
  )
}

export default AllPost
