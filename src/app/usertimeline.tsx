import Greet from "./greet";
import Hobbies from "./hobbies";
import Posts from "./posts";
import { UserType } from "./usertype";

type UserTimelineType = {
  userData: (UserType | null)
}

export default function Usertimeline({userData} :UserTimelineType){
  return (
    <>
      <Greet 
        userName={userData?.userName}
      />
      <Hobbies 
      hobbies={userData?.hobbies}
      />
      <Posts 
      posts={userData?.post}/>
    </>
  )
}