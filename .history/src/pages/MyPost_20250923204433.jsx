import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { useSelector } from 'react-redux'
import { Container, Card } from '../components'

function MyPost() {
    const [post, setPosts] = useState([])
    const userData = useSelector((state) => state.auth.userData)

    useEffect(() => {
        service.getPosts().then((allPosts) => {
           if (allPosts && allPosts.documents) {
                const userPosts = allPosts.documents.filter((p) => p.userId === userData.$id)
                setPosts(userPosts)
            }
        })
    }, [userData])

    return (
        <div className='w-full py-8'>
               <Container>
                   <div className='flex flex-wrap'>
                       {posts.map((post) => (
                           <div key={post.$id} className='p-2 lg:w-1/4 md:w-1/1'>
                               <Card {...post} />
                           </div>
                       ))}
                   </div>
                   </Container>
           </div>
    )
}

export default MyPost
