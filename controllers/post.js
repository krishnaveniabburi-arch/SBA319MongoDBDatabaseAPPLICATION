import Post from "../models/Posts.js";


// GET all posts
export const getPosts = async (req, res) => {
  try {

    const posts = await Post.find()
      .populate("author");


    res.status(200).json(posts);


  } catch (error) {

    res.status(500).json({
      message:error.message
    });

  }
};



// GET post by ID
export const getPostById = async (req,res)=>{

  try {

    const post = await Post.findById(req.params.id)
      .populate("author");


    if(!post){
      return res.status(404).json({
        message:"Post not found"
      });
    }


    res.status(200).json(post);


  } catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};



// POST create post
export const createPost = async(req,res)=>{

  try{

    const post = await Post.create(req.body);


    res.status(201).json(post);


  }catch(error){

    res.status(400).json({
      message:error.message
    });

  }

};



// PATCH update post
export const updatePost = async(req,res)=>{

  try{


    const post = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new:true,
        runValidators:true
      }
    );


    if(!post){

      return res.status(404).json({
        message:"Post not found"
      });

    }


    res.status(200).json(post);



  }catch(error){

    res.status(400).json({
      message:error.message
    });

  }

};



// DELETE post
export const deletePost = async(req,res)=>{

  try{

    const post = await Post.findByIdAndDelete(
      req.params.id
    );


    if(!post){

      return res.status(404).json({
        message:"Post not found"
      });

    }


    res.status(200).json({
      message:"Post deleted successfully"
    });


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};