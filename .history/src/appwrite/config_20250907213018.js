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
        this.databases = new Databases(this.client)
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
            console.log("Appwrite error: createost", error);  
        }
    }

    async updatePost({title, slug, content, status, userId, featuredImage}){
        try {
            
        } catch (error) {
             console.log("Appwrite error: update pst: ", error);  
        }

    }

}

const service = new Service();

export default service;