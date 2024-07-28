import { PostType } from "./usertype";

type PostsProps = {
  posts: PostType;
}

export default function Posts({posts}:PostsProps){
  console.log(posts);
  return (
    <>
      {posts?.map(({content, likes} : PostType)=>(
        <ul>
            <h3>Content:</h3>
            <ul><li>{content}</li></ul>
            <h3>likes:</h3>
            <ul><li>{likes}</li></ul>
        </ul>
      ))}
    </>
  );
}