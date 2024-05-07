// TechnologyPost.tsx
import React from 'react';
import { PostData } from './PostData';

interface TechnologyPostProps {
  post: PostData;
}

const TechnologyPost: React.FC<TechnologyPostProps> = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default TechnologyPost;
