import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store';
const rootElement = document.getElementById("root");

// Ensure you’re not doing this more than once:
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
