// TravelPost.tsx
import React from 'react';
import { PostData } from './PostData';

interface TravelPostProps {
  post: PostData;
}

const TravelPost: React.FC<TravelPostProps> = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default TravelPost;
