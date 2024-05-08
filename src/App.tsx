import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import PostList from './PostList';
import IndividualPost from './IndividualPost';
import HomePage from './HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <div style={{fontFamily: 'Dancing Script, cursive', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Router basename="/lifestyle-blogging">
        <Header />
        <div style={{ flex: 1, backgroundColor: '#EEE2DC', padding: '0.5rem 4rem 2rem 4rem', color: '#123c69' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/technology" element={<PostList category="technology" />} />
            <Route path="/travel" element={<PostList category="travel" />} />
            <Route path="/food" element={<PostList category="food" />} />
            <Route path="/post/:id" element={<IndividualPost />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
