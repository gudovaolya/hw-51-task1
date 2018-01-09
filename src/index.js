import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import films from './Films';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(films, document.getElementById('content'))
registerServiceWorker();
