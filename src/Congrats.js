import React from 'react'
import PropTypes from 'prop-types'; // ES6

/**
 * Functional react component for congradulatory message.
 * @function
 * @param {object} props - React props.
 * @returns { JSX.Element } - Rendered components( or null if `success` props)
 */

export default (props) => {
    if (props.success) {
        return (
                <div data-test="component-congrats">
                <span data-test="congrats-message">
                    Congradulations! you guessed the word!
                </span>
            </div>
        );
    } else {
        return (
            <div data-test="component-congrats" />
        );
    }    
}
