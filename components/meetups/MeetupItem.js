import {useRouter} from 'next/router';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import {MongoClient} from 'mongodb';

function MeetupItem(props) {
   const router=useRouter();
  const handleOnClick=()=>{
    router.push('/'+props.id);
  }
  const handleDelete= async()=>{
     // data fetching from an API end point
    //  const client=await MongoClient.connect('mongodb+srv://Santcodelol:Santcode321@cluster0.lww58.mongodb.net/meetups?retryWrites=true&w=majority');
       
    //  const db=client.db();
       
    //  const meetupCollection=db.collection('meetups');

  }
  return (
    <li className={classes.item}>
      <Card>
         <div className={classes.delete}>
         <button onClick={handleDelete}>X</button>
         </div>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={handleOnClick}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
