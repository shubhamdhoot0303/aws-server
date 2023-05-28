import mongoose from "mongoose";

const Connection = async () =>{
    const URL = `mongodb+srv://shubhamdhoot:03032000@cluster0.bgnqlgh.mongodb.net/admin?authSource=admin&replicaSet=atlas-vgxdeb-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`
    try{
        const DB_OPTION = {
            dbName:"user",
        };
        await mongoose.connect(URL,DB_OPTION );
        console.log("connected successful");
    }
    catch(err)
    {
        console.log(err);

    }
};
export default Connection;