import { PostType } from "./usertype";

type PostsProps = {
  posts: PostType;
}

export default function Posts({posts}:PostsProps){
  console.log(posts);
  return (
    <>
      {posts?.map((post: any)=>(
        <>
        <li>{post.content}</li>
        <li>{post.likes}</li>
        </>
      ))}
    </>
  );
}