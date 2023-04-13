import React from 'react';

const Quote = ({ quote }) => {
    return (
        <div>
            <h1>Random Quote Generator</h1>
            <div>
                <p>"{quote.text}"</p>
                <p>- {quote.author}</p>
            </div>
        </div>
    );
};

export default Quote;
