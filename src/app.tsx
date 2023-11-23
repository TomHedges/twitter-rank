import { container, h1 } from './app.css.ts';

import React from "react";
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div className={container}>
      <h1 className={h1}>Hello, World!</h1>
      <h2>twitter-rank</h2>
      <p>Test: 2</p>
    </div>
  );
};

const reactContainer = document.getElementById('root');
const root = createRoot(reactContainer!);
root.render(<App  />);
