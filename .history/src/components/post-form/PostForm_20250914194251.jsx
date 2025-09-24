import React, {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import service from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({post}) {
    const {register, handleSubmit, watch, control, getValues, setValue} =  useForm({
        defaultValues: {
            title: post?.title || "",
            content: post?.content || "",
            slug: post?.$id || "",
            status: post?.status || "active"
        }
    })

    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)

    const submit = async (data) => {
        if(post){
            const file = data.image[0] ? await service.uploadfile(data.image[0]) : null

            if(file){
                service.deletefile(post.featuredImage)
            } 

            const dbpost = await service.updatePost(post.$id,{
                ...data,
                featuredImage: file ? file.$id : undefined
            })

            if(dbpost){
                navigate(`/post`)
            }
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default PostForm
