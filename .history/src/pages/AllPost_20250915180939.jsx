import React, {useState, useEffect} from 'react'
import service from '../appwrite/config'

function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        service.getPosts([]).then((post) )
    },[])
  return (
    <div>
      
    </div>
  )
}

export default AllPost
