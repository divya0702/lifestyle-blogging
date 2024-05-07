import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { PostData, technologyPosts, travelPosts, foodPosts } from './PostData';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const IndividualPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find the post with the matching id and its corresponding image
  const findPostById = (posts: PostData[]) => {
    return posts.find(post => post.id === Number(id));
  };

  // // Fetch the image path based on the category and post id
  // const getImagePath = (category: string, postId: number): string | undefined => {
  //   switch (category) {
  //     case 'technology':
  //       return `/images/technology/${postId}.jpg`;
  //     case 'travel':
  //       return `/images/travel/${postId}.jpg`;
  //     case 'food':
  //       return `/images/food/${postId}.jpg`;
  //     default:
  //       return undefined;
  //   }
  // };

  // Determine the category of the post
  const determinePostCategory = (postId: number): PostData[] | undefined => {
    switch (true) {
      case postId >= 1 && postId <= 3:
        return technologyPosts;
      case postId >= 4 && postId <= 6:
        return travelPosts;
      case postId >= 7 && postId <= 9:
        return foodPosts;
      default:
        return undefined;
    }
  };

  // Fetch the category of the post and render it
  const postCategory = determinePostCategory(Number(id));
  const post = findPostById(postCategory || []);

  return (
    <div>
      {/* Add back arrow button */}
      <IconButton component={Link} to="/" aria-label="back">
        <ArrowBackIcon />
      </IconButton>
      {post && (
        <>
          
          <div style={{ maxWidth: 850, margin: '0 auto' }}> 
          <h2 style={{ color: '#ac3b61', margin: '1rem', fontSize:'2.5rem' }}>{post.title}</h2>
          <div style={{ maxWidth: 600, margin: '0 auto' }}> {/* Adjust the max width to your desired size */}
          {/* Render the image */}
          <img src={post.imageUrl} alt={post.title} style={{ width: '100%' }} />
          {/* Render the post content */}
          </div>
          <p style={{paddingBottom: '4rem', marginTop: '2rem', fontSize:'1.5rem'}}>{post.content}</p>
        </div>
        </>
      )}
       <style>
        {`
           @media screen and (min-width: 400px) and (max-width: 790px) {
            img {
              max-width: 315px;
              height: auto;
              padding-left: 4rem;
            }
            h2, p {
              margin: 2rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default IndividualPost;
