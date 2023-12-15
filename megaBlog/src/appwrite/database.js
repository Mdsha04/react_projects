import {  Client, ID, Databases, Storage, Query } from "appwrite";
import config from "../congif/config";

export class databaseService {

    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)

    }

    async createPost({title, slug, content, featuredimage, status, userid}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userid,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug, { title, content, featuredimage, status }) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    content,
                    title,
                    featuredimage,
                    status
                }
            );
        } catch (error) {
            console.log("appwrite error :: updatePost:error", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            );
            return true;
        } catch (error) {
            console.log("appwrite error:: deletePost:error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("appwrite error :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {

            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            )
        }
        catch (error) {
            console.log("appwrite error :: getPosts error ", error);
            return false;
        }
    }

    //File Service

    async uploadFiles(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("appwrite error :: uploadFiles error ", error);
            return false;
        }

    }

    async deleteFiles(fileId) {
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId,
            )
            return true
        } catch (error) {
            console.log("apwrite error :: deletePost :: error ", error);
            return false
        }
    }

    previewFiles(fileId) {
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId,
        )

    }
}

const databaseservice = new databaseService()
export default databaseservice;