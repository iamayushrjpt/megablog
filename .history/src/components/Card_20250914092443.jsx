import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

function Card({$id, title, featuredImage}) {

  return (
    <Link>
      <img href={service.getFilePreview(featuredImage)}/>
      
    </Link>
  )
}

export default Card
