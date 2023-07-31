import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import 'antd/dist/antd.css';
import { UsernameProvider } from './UsernameContext'; // Import the UsernameProvider component
import Router from './router';
import i18n from './translation';

const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <UsernameProvider> {/* Wrap your Router component with the UsernameProvider */}
        <Router />
      </UsernameProvider>
    </I18nextProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
