import React, { useState, useEffect } from 'react'
import service from '../appwrite/config'
import { Card, Container } from '../components'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    service.getPosts().then((post) => {
      if (post) {
        setPosts(post.documents)
      }
    })
  }, [])

  if (posts.length === 0) {
    return (
      <div className="w-full py-20 bg-gray-50 text-center">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-800">
              Welcome to My Blog 🚀
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Please login to explore articles and insights.
            </p>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Latest Posts ✨
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Discover the most recent articles and updates
        </p>
      </div>

      <Container>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <Card {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Home
