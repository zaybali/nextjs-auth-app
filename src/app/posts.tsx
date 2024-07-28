import { PostType } from "./usertype";

type PostsProps = {
  posts: PostType;
}

export default function Posts({posts}:PostsProps){
  console.log(posts);
  return (
    <>
      {posts?.map((post: any)=>(
        <ul>
            <h3>Content:</h3>
            <li>{post.content}</li>
            <h3>likes:</h3>
            <li>{post.likes}</li>
        </ul>
      ))}
    </>
  );
}