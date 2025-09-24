import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class Service{
     client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

}

const service = new Service();

export default service;