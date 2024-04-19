import React, { useState } from 'react';
import Sentiment from 'sentiment';

function SentimentAnalysis() {
    const [rating, setRating] = useState('');
    const [sentimentScore, setSentimentScore] = useState(0);
    const [sentimentResult, setSentimentResult] = useState('');
  
    const analyzeSentiment = () => {
      const sentiment = new Sentiment();
      const result = sentiment.analyze(rating);
      setSentimentScore(result.score);
      setSentimentResult(result.score > 0 ? 'Positive' : result.score < 0 ? 'Negative' : 'Neutral');
    };
  
    return (
      <div className="App">
        <h1>Product Rating Sentiment Analysis</h1>
        <textarea
          placeholder="Enter your product rating here..."
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button onClick={analyzeSentiment}>Analyze Sentiment</button>
        {sentimentScore !== 0 && (
          <div>
            <h2>Sentiment Score: {sentimentScore}</h2>
            <h2>Sentiment: {sentimentResult}</h2>
          </div>
        )}
      </div>
    );
}

export default SentimentAnalysis