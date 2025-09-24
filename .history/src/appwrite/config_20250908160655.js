import conf from "../conf/conf";
import { Client, Databases, ID } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, status, userId, featuredImage}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    userId,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite error: create post", error);  
        }
    }

    async updatePost(slug, {title, content, status, featuredImage}){
        try {
             return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
             console.log("Appwrite error: update post: ", error);  
        }

    }

    async deletePost(slug){
        try {
              await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
               
            )
            return true;
        } catch (error) {
             console.log("Appwrite error: delete post: ", error); 
             return false; 
        }

    }

    async getPost(slug){
        try {
             return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
               
            )
        } catch (error) {
             console.log("Appwrite error: get post: ", error);  
        }

    }

     async getPosts(queries = [Query.equal("status", "active")]){
        try {
             return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
               
            )
        } catch (error) {
             console.log("Appwrite error: list post: ", error); 
             return false; 
        }

    }

    //file upload service

    async uploadfile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                I
            )
            
        } catch (error) {
             console.log("Appwrite error: upload file : ", error); 
             return false; 
        }
    }
}

const service = new Service();

export default service;