import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

function Card({$id, title, featuredImage}) {

  return (
    <Link to={`/post/${$id}`}>
        <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{title}</h2>
      </div>
    </div>
    </Link>
  )
}

export default Card
