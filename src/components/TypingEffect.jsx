import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed }) => {
    const [words, setWords] = useState([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const wordsArray = text.split(' ');
        setWords(wordsArray);

        const intervalId = setInterval(() => {
            if (currentWordIndex < wordsArray.length) {
                setCurrentWordIndex(currentWordIndex + 1);
            } else {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId)
    }, [text, speed, currentWordIndex]);

    return (
        <p style={{ fontSize: '24px' }}> 
            {words.slice(0, currentWordIndex).map((word, index) =>(
                <span key={index}>{word}&nbsp;</span>
            ))}
        </p>
    );
};

export default TypingEffect;