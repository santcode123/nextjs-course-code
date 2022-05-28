import { useRouter } from 'next/router';
import { MongoClient,ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';


const MeetupDetails = ({meetupData}) => {
    console.log(meetupData);
    const router = useRouter()
    const { meetupId, ...restProps } = router.query;

    return <MeetupDetail image={meetupData.image}
        title={meetupData.title}
        address={meetupData.address}
        description={meetupData.description}
    />
}

export async function getStaticPaths() {
    // fetch data from an API
    const client=await MongoClient.connect('mongodb+srv://Santcodelol:Santcode321@cluster0.lww58.mongodb.net/meetups?retryWrites=true&w=majority');
       
    const db=client.db();
    const meetupCollection=db.collection('meetups');
    const meetupsId= await meetupCollection.find({},{_id:1}).toArray();

    return {
        fallback: true,
        paths: meetupsId.map(meetup=>({ params:{meetupId:meetup._id.toString()}}))
}
}

export async function getStaticProps(context) {
    // fetch data from an API
    const meetupId = context.params.meetupId;
    const client=await MongoClient.connect('mongodb+srv://Santcodelol:Santcode321@cluster0.lww58.mongodb.net/meetups?retryWrites=true&w=majority');
       
    const db=client.db();
    const meetupCollection=db.collection('meetups');

    const meetup= await meetupCollection.findOne({_id:ObjectId(meetupId)});
    
    
    return {
        props: {
            meetupData: {
                 title:meetup.title,
                 image:meetup.image,
                 description:meetup.description,
                 address:meetup.address,
                id:meetup._id.toString() 
            },
        }
    }
}



export default MeetupDetails;