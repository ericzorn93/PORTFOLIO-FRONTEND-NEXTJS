import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import './App.css';
import { CustomRoutes } from './router/routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={{}}>
      <div className="App">
        <CustomRoutes />
      </div>
    </ThemeProvider>
  );
};

export default App;
