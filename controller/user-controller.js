import User from '../schema/user-schema.js';




export const welcome = async ( req , res ) =>{
    
   try{
         res.status(201).json({message:"welcome to backend"});
       }
   catch(error)
       {  res.status(401).json({ message:error.message })  };
}
export const addUser = async ( req , res ) =>{
     const user = req.body;
     const newUser =  new User(user);
    try{
          await newUser.save();
            res.status(201).json(newUser);
        }
    catch(error)
        {  res.status(401).json({ message:error.message })  };
}

export const getUser = async ( req , res ) =>{
    
   try{
        const users= await User.find({});
           res.status(201).json(users);
       }
   catch(error)
       {  res.status(401).json({ message:error.message })  };
}

export const getUsers = async ( req , res ) =>{
        
    try{
         const user= await User.findById(req.params.id);
            res.status(201).json(user);
        }
    catch(error)
        {  res.status(401).json({ message:error.message })  };
 }

 export const editUser = async ( req , res ) =>{
    const user = req.body;
    const editUser =  new User(user);
    try{
         const user= await User.updateOne({ _id:req.params.id},editUser);
            res.status(201).json(user);
        }
    catch(error)
        {  res.status(401).json({ message:error.message })  };
 }
 export const deleteUser = async ( req , res ) =>{
   
    try{
         const user= await User.deleteOne({ _id:req.params.id});
            res.status(201).json(user);
        }
    catch(error)
        {  res.status(401).json({ message:error.message })  };
 }