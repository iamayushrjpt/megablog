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
            
        } catch (error) {
            console.log("Appwrite erre");
            
        }
    }

}

const service = new Service();

export default service;