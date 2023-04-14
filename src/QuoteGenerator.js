import React, { useState, useEffect } from 'react';
import Quote from './Quote';
import './Quote.css';

const QuoteGenerator = () => {
    const [quote, setQuote] = useState({
        text: '',
        author: ''
    });

    useEffect(() => {
        generateQuote();
    }, []);

    const generateQuote = () => {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(response => response.json())
            .then(data => {
                const { quotes } = data;
                const randomIndex = Math.floor(Math.random() * quotes.length);
                const { quote, author } = quotes[randomIndex];
                setQuote({
                    text: quote,
                    author: author
                });
            })
            .catch(error => {
                console.error('Failed to fetch quote:', error);
            });
    };

    return (
        <div className="quote-generator-container">
            <div className="quote-box">
                <Quote quote={quote} />
                <button className="quote-button" onClick={generateQuote}>
                    Generate Quote
                </button>
            </div>
        </div>
    );
};

export default QuoteGenerator;
