import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
            .setDevKey("standard_97dd76677115f5811c2f05f91257047fb02d57dfdf4da5e4f09af895ec1920c1a0e183f07b0f87b694b4243f6be665548155540f1fbc73fc9f14009a96396adf03cc624eb5c5d257c482e4c79027d6a4adf45cc3eb836f54f92c8a5b3f3cf6a7f9e4c8da6dffa2f030fe9a7a388b7e35910092dbd7d21e7a1256120b3fdb9f45")
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {
           const userAccount = this.account.create(ID.unique(), email, password, name)
           if (userAccount) {
            return this.login({email, password});
           }else{
            return userAccount;
           }
        } catch (error) {
            throw error
        }
    }

    async login({email, password}){
        try {
           return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
             console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    }

}

const authservice = new AuthService();

export default authservice;