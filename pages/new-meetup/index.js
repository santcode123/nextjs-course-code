
import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetupPage=()=>{
  async function addMeetupHandler(meetupFormData)
  {  
      const response=await fetch('/api/new-meetup',{
          method:'POST',
          body:JSON.stringify(meetupFormData),
          headers:{
              'Content-Type':'application/json'
          }
      }) ;
      const  data=await response.json();
     console.log(data)
  }
    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    )
}

export default NewMeetupPage;