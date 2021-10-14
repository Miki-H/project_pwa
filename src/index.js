import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Student from './Student';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Student />
  </React.StrictMode>,
  document.getElementById('students')
);
