import mongoose from "mongoose";
import dotenv from "dotenv";

import User from "../models/User.js";
import Post from "../models/Posts.js";
import Comment from "../models/Comments.js";


dotenv.config();


const seed = async()=>{


await mongoose.connect(process.env.MONGO_URI);



await User.deleteMany();
await Post.deleteMany();
await Comment.deleteMany();



const users = await User.insertMany([

{
name:"John Smith",
email:"john@test.com",
age:25
},

{
name:"Sarah Lee",
email:"sarah@test.com",
age:30
},

{
name:"Mike Brown",
email:"mike@test.com",
age:28
},

{
name:"Emma Davis",
email:"emma@test.com",
age:22
},

{
name:"Alex Wilson",
email:"alex@test.com",
age:35
}

]);



const posts = await Post.insertMany([

{
title:"Learning MongoDB",
content:"MongoDB is a great database system",
author:users[0]._id,
category:"Technology"
},


{
title:"Travel Guide",
content:"My favorite travel locations",
author:users[1]._id,
category:"Travel"
},


{
title:"Sports News",
content:"Latest sports updates",
author:users[2]._id,
category:"Sports"
},


{
title:"School Tips",
content:"Helpful education information",
author:users[3]._id,
category:"Education"
},


{
title:"General Blog",
content:"My first blog post",
author:users[4]._id
}

]);



await Comment.insertMany([

{
text:"Great post!",
user:users[0]._id,
post:posts[0]._id
},


{
text:"Very helpful information",
user:users[1]._id,
post:posts[0]._id
},


{
text:"I want to visit there",
user:users[2]._id,
post:posts[1]._id
},


{
text:"Nice article",
user:users[3]._id,
post:posts[2]._id
},


{
text:"Thanks for sharing",
user:users[4]._id,
post:posts[3]._id
}

]);



console.log("Database seeded");


mongoose.connection.close();

};


seed();
