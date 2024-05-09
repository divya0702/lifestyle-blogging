import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Card, CardContent, CardActionArea, CardMedia, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { PostData, technologyPosts, travelPosts, foodPosts } from './PostData';
import NavigationBar from './NavigationBar';
import theme from './theme';

interface PostListProps {
  category?: string; // Define the category prop
}

const PostList: React.FC<PostListProps> = ({ category }) => {
  // Define posts based on the category prop
  let posts: PostData[] = [];
  switch (category) {
    case 'technology':
      posts = technologyPosts;
      break;
    case 'travel':
      posts = travelPosts;
      break;
    case 'food':
      posts = foodPosts;
      break;
    default:
      posts = []; // If no category is specified, show all posts
      break;
  }

  // Define background images for each category
  const categoryBackgrounds: { [key: string]: string } = {
    technology: '/images/technology-background.jpg',
    travel: '/images/travel-background.jpg',
    food: '/images/food-background.jpg',
  };

  // Capitalize the first letter of the category
  const capitalizedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';

  return (
    <div style={{ backgroundImage: `url(${categoryBackgrounds[category || '']})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ padding: '2rem', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
        <IconButton component={Link} to="/" aria-label="back">
        <ArrowBackIcon />
      </IconButton>
          <div style={{ marginBottom: '1rem', textAlign: 'center', flex: '1' }}> {/* Adjusted styles */}
            <NavigationBar />
          </div>
        </div>

        {category && (
          <Typography variant="h4" align="center" gutterBottom style={{ margin: '1.5rem', color: theme.tertiaryColor, fontFamily: 'inherit' }}>
            {capitalizedCategory + ` blog` }
          </Typography>
        )}

        <Grid container spacing={2}>
          {posts.map((post: PostData) => (
            <Grid key={post.id} item xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea component={Link} to={`/post/${post.id}`}>
                  {post?.imageUrl && <CardMedia
                    component="img"
                    height="140"
                    image={post.imageUrl} // Use the imageUrl property from the PostData object
                    alt={post.title}
                  /> }
                  <CardContent style={{ backgroundColor: '#BAB2B5' }}>
                    <Typography gutterBottom variant="h5" component="div" style={{ textDecoration: 'none', color: theme.primaryColor, fontFamily: theme.primaryFont, fontSize: '2rem' }}>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" style={{ textDecoration: 'none', color: theme.primaryColor, fontFamily: theme.primaryFont, fontSize: '1.25rem' }}>
                      {post.content.split(' ').slice(0, 20).join(' ') + "  ..."}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default PostList;
