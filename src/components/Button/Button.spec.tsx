import React, { MouseEvent } from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    it('renders', () => {
        const variant = 'success';
        const type = 'button';
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        const onClick = (event: MouseEvent<HTMLButtonElement>) =>
            event.preventDefault();
        const { getAllByText } = render(
            <Button type={type} variant={variant} onClick={onClick}>
                Hello World
            </Button>,
        );
        const val = getAllByText(
            (_, element) => element?.textContent === 'Hello World',
        );

        expect(val).toBeDefined();
    });
});
