import React from 'react';
import './BlogCard.css';

const BlogCard = () => {
  return (
    <div className="blog-card-container">
      {/* First Blog Card */}
      <div className="blog-card">
        <h2>First Blog Post</h2>
        <p>This is the content of the first blog post.</p>
        <button>Read More</button>
      </div>

      {/* Second Blog Card */}
      <div className="blog-card">
        <h2>Second Blog Post</h2>
        <p>This is the content of the second blog post.</p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
