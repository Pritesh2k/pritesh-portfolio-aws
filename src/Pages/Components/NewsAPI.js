import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../CSS/newsapi.css';

function NewsAPI() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedArticle, setExpandedArticle] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us', // Change this to your preferred country code
            apiKey: 'f8dc279aff0e487599c18563cb686d1f', // Replace 'YOUR_API_KEY' with your actual API key
          },
        });

        const filteredArticles = response.data.articles.filter(article => article.urlToImage !== null);

        // If there are no articles with images, set the articles array to the original data
        // Otherwise, set the articles array to the filtered data
        setArticles(filteredArticles.length > 0 ? filteredArticles : response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const toggleExpandedArticle = (index) => {
    if (expandedArticle === index) {
      setExpandedArticle(null);
    } else {
      setExpandedArticle(index);
    }
  };

  return (
    <div className="news-container">
      <h2 className="news-title">Top Headlines</h2>
      {loading ? (
        <p className="news-loading">Loading...</p>
      ) : (
        <div className="news-list">
          {articles.map((article, index) => (
            <div className="news-card" key={index}>
              <img src={article.urlToImage} alt={article.title} className="news-image" />
              <div className="news-details">
                <h3 className="news-header" onClick={() => toggleExpandedArticle(index)}>
                  {article.title}
                </h3>
                <p className="news-author">{article.author}</p>
                <p className="news-date">{new Date(article.publishedAt).toLocaleString()}</p>
                {expandedArticle === index && (
                  <div className="news-content">
                    <p>{article.content}</p>
                    <a className="news-read-more" href={article.url} target="_blank" rel="noopener noreferrer">
                      Read More
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NewsAPI;
