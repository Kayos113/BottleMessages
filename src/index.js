import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Canvas from './BottlePage';
import reportWebVitals from './reportWebVitals';

axios({
  method: 'get',
  url: 'https://bottle-backend-api.herokuapp.com',
  responseType: 'json'
})
.then(function (response) {
  console.log(response);
})
.catch( err => {
  console.log(err);
})

ReactDOM.render(
  <React.StrictMode>
    <Canvas />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
