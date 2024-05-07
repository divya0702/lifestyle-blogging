// PostPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Post from './Post';

interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
}

interface PostPageProps {
  posts: Post[];
}

const PostPage: React.FC<PostPageProps> = ({ posts }) => {
  const { id } = useParams<{ id: string }>(); // Extract the id parameter from the URL

  // Find the post with the matching id
  const post = posts.find(post => post.id === Number(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return <Post title={post.title} content={post.content} />;
};

export default PostPage;
