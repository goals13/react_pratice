import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';//우리가 만든 커모넌트 불러올 때는 이렇게 import를 사용해서 불러준다.
import * as serviceWorker from './serviceWorker';

ReactDOM.render(//브라우저 상에 우리의 리액트 컴포넌트를 보여주기위해 사용 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
