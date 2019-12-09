import React from 'react'
import PropTypes from 'prop-types'
import { worker } from 'cluster';
import { workerData } from 'worker_threads';

 const GuessWords = props => {
    let contents
    if (props.guessWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">
                Try to guess the secret word!
            </span>
        );
    } else {
        const guessedWordsRows = props.guessedWords.map((word, index) => {
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        });

        contents = (
            <div data-test="guessed-words">
                <h3>Guess Words</h3>
                <table className="table table-sm">
                    <thead className="thead-light">
                        <li>
                            <th>Guess</th>
                            <th>Matching Letters</th>
                        </li>
                    </thead>
                    <tbody>
                        { guessedWordsRows }
                    </tbody>
                </table>
            </div>
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