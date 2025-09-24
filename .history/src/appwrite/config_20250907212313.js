import conf from "../conf/conf";
import { Client, Databases, ID } from "appwrite";

export class Service{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
    }

    async uploadfile(){
        try {
            await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slu
            )
        } catch (error) {
            console.log("Appwrite error: ", error);+   
        }
    }

}

const service = new Service();

export default service;