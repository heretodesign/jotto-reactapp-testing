import React from 'react'
import PropTypes from 'prop-types'

 const GuessWords = props => {
    let contents
    if (props.guessWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">
                Try to guess the secret word!
            </span>
        );
    }

    return (
        <div data-test="component-guessed-words">
            { contents }
        </div>
    );
};

GuessWords.propTypes({
    guessWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessWords: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        })
    ).isRequired,
});

export default GuessWords;