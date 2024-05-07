// FoodPost.tsx
import React from 'react';
import { PostData } from './PostData';

interface FoodPostProps {
  post: PostData;
}

const FoodPost: React.FC<FoodPostProps> = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default FoodPost;
