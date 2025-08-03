import React from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <div className="main">
      <div className="column">
        <h1>Book Details</h1>
        <BookDetails />
      </div>
      <div className="column">
        <h1>Blog Details</h1>
        <BlogDetails />
      </div>
      <div className="column">
        <h1>Course Details</h1>
        <CourseDetails />
      </div>
    </div>
  );
}

export default App;
