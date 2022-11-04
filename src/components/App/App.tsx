import React, { FC, MouseEvent } from 'react';
import Button from '../Button/Button';
import logo from './logo.svg';
import './App.scss';

const App: FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={logo as unknown as string}
                    className="App-logo"
                    alt="logo"
                />
                <p>
                    Edit <code>src/components/App/App.tsx</code> and save to
                    reload.
                </p>
                <a
                    className="App-link"
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
