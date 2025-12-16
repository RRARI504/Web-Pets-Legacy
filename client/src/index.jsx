import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

// create root node and render <App />
const root = createRoot(document.getElementById('app'));
root.render(<App />);