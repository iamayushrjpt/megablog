import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

function Card({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 flex flex-col shadow hover:shadow-lg transition">
        {/* ✅ Flexible image wrapper */}
        <div className="w-full mb-4 flex justify-center items-center">
          <img
            src={service.getFileView(featuredImage)}
            alt={title}
            className="rounded-xl w-full max-h-48 object-cover"
          />
        </div>
        {/* ✅ Text adjusts properly */}
        <h2 className="text-lg font-bold line-clamp-2">{title}</h2>
      </div>
    </Link>
  )
}

export default Card
