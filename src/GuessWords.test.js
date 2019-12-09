import React from 'react';
import { shallow } from 'enzyme';
import GuessWords from './GuessWords'
import { findByTestAttr, checkProps } from '../test/testUtils'

const defaultProps = {
     guessWords: [{
         guessWord: 'train', letterMatchCount: 3
     }],
};

/**
 * Functional react component for congradulatory message.
 * @function
 * @param {object} props - Component props specific to this setup.
 * @returns { ShallowWrapper}
 * 
 */
const setup = (props ={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessWords {...setupProps} />)
}

test('test does not throw warning with default props', () => {
    checkProps(GuessWords, defaultProps);
});

describe('if there are no words guessed', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup({ guessWords: [] });
    });
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    })
});

describe('if there are words guessed', () => {
    let wrapper
    const guessWords = [
        {guessWord: 'trian', letterMatchCount: 3},
        {guessWord: 'agile', letterMatchCount: 5},
        {guessWord: 'party', letterMatchCount: 1}
    ];
    beforeEach(() => {
        wrapper = setup({ guessWords });
    });
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('renders "guessed words" section', () => {
        const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordsNodes.length).toBe(1);
    });
    test('correct number of guessed words', () => {
        const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordsNodes.length).toBe('guessedWord.length');
    })
});