import { Client, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://syd.cloud.appwrite.io/v1") // ✅ your endpoint
  .setProject("68cc748c0022962fc6e7"); // ✅ your project ID

export const storage = new Storage(client);
