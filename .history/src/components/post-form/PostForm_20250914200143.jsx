import React, {useCallback, useEffect} from 'react'
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

            const dbPost = await service.updatePost(post.$id,{
                ...data,
                featuredImage: file ? file.$id : undefined
            })

            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        }else{
            const file = await service.uploadfile(data.image[0])

            if(file){
                const fileId = file.$id
                data.featuredImage = fileId
                const dbPost = await service.createPost({...data, userId: userData.$id})

                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }

            
        }
    }

    const slugTransform =((value) => {
        if(value && typeof(value) === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        
        return "";
    },[])

    useEffect((value,{watch}) => {
        if
    },[])
  return (
    <div>
      
    </div>
  )
}

export default PostForm
