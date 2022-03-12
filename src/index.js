import { React, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Call API every 5 seconds

// setTimeout(async function syncData() {
//   const response = await fetch('https://api.github.com/users/timmywheels/repos');
//   const data = await response.json();
//   console.log(data);
//   console.log(new Date().getSeconds());
//   setTimeout(syncData,5000);
// }, 0);
