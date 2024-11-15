import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { CounterProvider } from './context/counterContext';
import CounterStore from './CounterStore';

const store = new CounterStore();

render(
    <div>
        <CounterProvider value={store}>
            <App />
        </CounterProvider>
    </div>
    , document.getElementById('root')
)