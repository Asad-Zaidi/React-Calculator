// import React, { useState, useEffect } from 'react';
// import Head from '../Nav-Bar/Header';
// import './Qoute.css';

// export default function Qoute() {
//     const [quotes, setQuotes] = useState([]);
//     const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

//     useEffect(() => {
//         const fetchQuotes = async () => {
//             try {
//                 const response = await fetch('https://type.fit/api/quotes');
//                 const data = await response.json();
//                 setQuotes(data);
//             } catch (error) {
//                 console.error('Error fetching quotes:', error);
//             }
//         };

//         fetchQuotes();
//     }, []);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCurrentQuoteIndex((prevIndex) => (prevIndex + 3) % quotes.length);
//         }, 100000);

//         return () => clearInterval(intervalId);
//     }, [quotes]);

//     return (
//         <>
//             <Head />
//             <div className="quote-container">
//                 <div className="quote-wrapper">
//                     {quotes.length > 0 && (
//                         <blockquote className="quote">
//                             <p>{quotes[currentQuoteIndex].text}</p>
//                             <footer>- {quotes[currentQuoteIndex].author || 'Unknown'}</footer>
//                         </blockquote>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// }

import React, { useState, useEffect } from 'react';
import Head from '../Nav-Bar/Header';
import './Qoute.css';

export default function Qoute() {
    const [quotes, setQuotes] = useState([]);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const response = await fetch('https://type.fit/api/quotes');
                const data = await response.json();
                setQuotes(data);
            } catch (error) {
                console.error('Error fetching quotes:', error);
            }
        };

        fetchQuotes();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 10000);

        return () => clearInterval(intervalId);
    }, [quotes]);

    const handleGenerateQuote = () => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    };

    return (
        <>
            <Head />
            <div className="quote-container">
                <div className="quote-wrapper">
                    {quotes.length > 0 && (
                        <blockquote className="quote">
                            <p>"{quotes[currentQuoteIndex].text}"</p>
                        </blockquote>
                    )}
                    <button className="generate" onClick={handleGenerateQuote}>
                        Generate New Quote
                    </button>
                </div>
            </div>
        </>
    );
}
