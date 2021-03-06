import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App/App';
import Image from './Component/Image/Image';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Image titre='Mon application React'/>, document.getElementById('img'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
