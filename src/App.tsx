// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import PostList from './PostList';
import IndividualPost from './IndividualPost';
import HomePage from './HomePage'; // Import the HomePage component
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <>
      <div style={{ backgroundColor: '#EEE2DC' }}>
        <div style={{ fontFamily: 'Dancing Script, cursive', marginBlock: '0 4rem', color: '#123c69' }}>
          <Router basename="/lifestyle-blogging"> {/* Specify the basename */}
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} /> {/* Use HomePage the main home page */}
              <Route path="/technology" element={<PostList category="technology" />} />
              <Route path="/travel" element={<PostList category="travel" />} />
              <Route path="/food" element={<PostList category="food" />} />
              <Route path="/post/:id" element={<IndividualPost />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </div>
    </>
  );
};

export default App;
