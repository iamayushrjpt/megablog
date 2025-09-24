import React, {useState, useEffect} from 'react'
import service from '../appwrite/config'
import { Container, Card } from '../components'

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
      <Container>
        {posts.map((post) => (
            <div>
                
            </div>
        ))}
      </Container>
    </div>
  )
}

export default AllPost
