import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

function Card({$id, title, featuredImage}) {

  return (
    <Link to={`/post/$`}>
      <img href={service.getFilePreview(featuredImage)}/>
      <h2>{title}</h2>
    </Link>
  )
}

export default Card
