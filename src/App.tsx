import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import PostList from './PostList';
import IndividualPost from './IndividualPost';
import HomePage from './HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import theme from './theme';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Router basename="/lifestyle-blogging">
        <Header />
        <div className='app-css'>
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
      <style>
        {`
          .app-container {
            font-family: ${theme.primaryFont};
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          .app-css {
            flex: 1;
            background-color: ${theme.secondaryColor};
            padding: 0.5rem 4rem 2rem;
            color: ${theme.primaryColor};
          }

          @media screen and (min-width: 400px) and (max-width: 790px) {
            .app-css {
              padding: 0.5rem 1.5rem 2rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;
