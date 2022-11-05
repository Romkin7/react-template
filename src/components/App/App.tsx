import React, { FC, MouseEvent } from 'react';
import Button from '../Button/Button';
import logo from './logo.svg';
import './App.scss';

const App: FC = () => {
    return (
        <div className="app">
            <header className="app--header">
                <img
                    src={logo as unknown as string}
                    className="app--logo"
                    alt="logo"
                />
                <p>
                    Edit <code>src/components/App/App.tsx</code> and save to
                    reload.
                </p>
                <a
                    className="app--link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Button
                    type="button"
                    variant="success"
                    onClick={(event: MouseEvent<HTMLButtonElement>) =>
                        event.preventDefault()
                    }
                >
                    Hello World!
                </Button>
            </header>
        </div>
    );
};

export default App;
