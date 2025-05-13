// BlogTeaser.jsx
import React from "react";
import "./BlogTeaser.css";

const BlogTeaser = () => {
  const latestPost = {
    title: "The Future of React in 2023",
    excerpt:
      "Exploring the upcoming features and trends in React ecosystem that every developer should know about.",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "React",
  };

  return (
    <section className="blog-teaser-section">
      <div className="blog-teaser-container">
        <h2 className="blog-teaser-title">Latest Blog Post</h2>
        <div className="blog-teaser-card">
          <div className="blog-teaser-image"></div>
          <div className="blog-teaser-content">
            <span className="blog-teaser-category">{latestPost.category}</span>
            <h3 className="blog-teaser-post-title">{latestPost.title}</h3>
            <p className="blog-teaser-excerpt">{latestPost.excerpt}</p>
            <div className="blog-teaser-meta">
              <span className="blog-teaser-date">{latestPost.date}</span>
              <span className="blog-teaser-readtime">{latestPost.readTime}</span>
            </div>
            <button className="blog-teaser-button">Read Article</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;