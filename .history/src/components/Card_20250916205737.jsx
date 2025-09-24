import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

function Card({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div
        className="
          w-full 
          bg-gray-100 
          rounded-xl 
          p-3 sm:p-4   /* ✅ smaller padding on mobile */
          flex flex-col 
          h-[280px] sm:h-[320px]  /* ✅ shorter height on mobile */
          transition-transform 
          hover:scale-[1.02]  /* ✅ subtle hover effect */
        "
      >
        <div
          className="
            w-full 
            mb-3 sm:mb-4  /* ✅ smaller margin on mobile */
            h-40 sm:h-48  /* ✅ smaller image height on mobile */
            overflow-hidden 
            flex justify-center items-center
          "
        >
          <img
            src={service.getFileView(featuredImage)}
            alt={title}
            className="
              rounded-xl 
              w-full h-full 
              object-cover 
            "
          />
        </div>
        <h2
          className="
            text-lg sm:text-xl  /* ✅ font adjusts for mobile */
            font-bold 
            line-clamp-2
          "
        >
          {title}
        </h2>
      </div>
    </Link>
  )
}

export default Card
