import mongoose from "mongoose"

export const ConnectDB = async ()=>{
    try {
        
    await mongoose.connect('mongodb+srv://theskyrajbhar:SkyToDoApp$0813@cluster0.ft9yf2g.mongodb.net/todo-app')

    console.log("DB connected");
    
    } 
    catch (error) {
        console.log(error.message);
    }
}