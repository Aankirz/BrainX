import { Account, Client, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('http://localhost/v1')
    .setProject('63cc1a4fb3f404ae8f1d');

export const account=new Account(client);

export const database=new Databases(Client,'63cc1bf61423a05fd514');

