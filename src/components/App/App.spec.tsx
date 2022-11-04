import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Button', () => {
    it('renders', () => {
        const { getAllByText } = render(<App />);
        const val = getAllByText(
            (_, element) => element?.textContent === 'Hello World',
        );

        expect(val).toBeDefined();
    });
});
