import React, {useState, useEffect} from 'react'
import service from '../appwrite/config'
import { Container, Card } from '../components'

function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        service.getPosts([]).then((post) => {
            if(post){
                setPosts(post.documents)
            }
        })
    },[])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap md:flex-row'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <Card {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPost
