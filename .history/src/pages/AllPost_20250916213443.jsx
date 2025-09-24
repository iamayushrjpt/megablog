import React, { useState, useEffect } from 'react'
import service from '../appwrite/config'
import { Container, Card } from '../components'

function AllPost() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    service.getPosts([]).then((post) => {
      if (post) {
        setPosts(post.documents)
      }
    })
  }, [])

  return (
    <div className="w-full py-8">
      <Container>
        {/* Mobile: column | Desktop: row wrap */}
        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="w-full md:w-1/4 p-2"
            >
              <Card {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPost
