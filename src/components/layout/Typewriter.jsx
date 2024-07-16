import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function Typewriter({ words, writeSpeed, eraseSpeed, pauseBetween }) {
    const [displayedText, setDisplayedText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isErasing, setIsErasing] = useState(false);

    useEffect(() => {
        const handleType = () => {
            const currentWord = words[wordIndex];
            if (isErasing) {
                if (displayedText.length > 0) {
                    setDisplayedText(currentWord.substring(0, displayedText.length - 1));
                } else {
                    setIsErasing(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            } else {
                if (displayedText.length < currentWord.length) {
                    setDisplayedText(currentWord.substring(0, displayedText.length + 1));
                } else {
                    setTimeout(() => setIsErasing(true), pauseBetween * 1000);
                }
            }
        };

        const speed = isErasing ? eraseSpeed * 1000 : writeSpeed * 1000;
        const timer = setTimeout(handleType, speed);

        return () => clearTimeout(timer);
    }, [displayedText, isErasing, words, wordIndex, writeSpeed, eraseSpeed, pauseBetween]);

    return <span className="type-typer">{displayedText}</span>;
}

Typewriter.propTypes = {
    words: PropTypes.arrayOf(PropTypes.string).isRequired,
    writeSpeed: PropTypes.number,
    eraseSpeed: PropTypes.number,
    pauseBetween: PropTypes.number,
};

export default Typewriter