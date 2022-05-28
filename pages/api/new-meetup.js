import {MongoClient} from 'mongodb'
 
 export default async function handler(req,res)
{  

   if(req.method==='POST')
   {
       const data=req.body;
      
  //      const{title,image,address,description}=data;
    
       const client=await MongoClient.connect('mongodb+srv://Santcodelol:Santcode321@cluster0.lww58.mongodb.net/meetups?retryWrites=true&w=majority');
       
       const db=client.db();
       const meetupCollection=db.collection('meetups')

       const result =await meetupCollection.insertOne(data);
       
       client.close();
       res.status(201).json({message:'meetup inserted!'});
    
   }

}