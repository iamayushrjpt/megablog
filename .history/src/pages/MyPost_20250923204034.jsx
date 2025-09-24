import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { useSelector } from 'react-redux'
import { Container, Card } from '../components'

function MyPost() {
    const [post, setPosts] = useState([])
    const userData = useSelector((state) => state.auth.userData)

    useEffect(() => {
        service.getPosts().then((allPosts) => {
            /*console.log("All posts:", allPosts)
            console.log("User ID:", userData.$id)
            if (allPosts) {
                const userPosts = allPosts.filter((p) => p.userId === userData.$id)
                console.log("User posts:", userPosts)
                setPosts(userPosts)
            }*/
           
           console.log(allPosts.documents[].userId);
           
        })
    }, [userData])

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
