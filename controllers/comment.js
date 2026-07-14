import Comment from "../models/Comments.js";



// GET all comments
export const getComments = async(req,res)=>{

  try{

    const comments = await Comment.find()
      .populate("user")
      .populate("post");


    res.status(200).json(comments);


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};




// GET comments for a post
export const getCommentsByPost = async(req,res)=>{

  try{

    const comments = await Comment.find({
      post:req.params.postId
    })
    .populate("user");


    res.status(200).json(comments);


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};




// POST create comment
export const createComment = async(req,res)=>{

  try{

    const comment = await Comment.create(req.body);


    res.status(201).json(comment);


  }catch(error){

    res.status(400).json({
      message:error.message
    });

  }

};




// PATCH update comment
export const updateComment = async(req,res)=>{

  try{


    const comment =
      await Comment.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new:true,
          runValidators:true
        }
      );


    if(!comment){

      return res.status(404).json({
        message:"Comment not found"
      });

    }


    res.status(200).json(comment);


  }catch(error){

    res.status(400).json({
      message:error.message
    });

  }

};




// DELETE comment
export const deleteComment = async(req,res)=>{

  try{

    const comment =
      await Comment.findByIdAndDelete(
        req.params.id
      );


    if(!comment){

      return res.status(404).json({
        message:"Comment not found"
      });

    }


    res.status(200).json({
      message:"Comment deleted successfully"
    });


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};