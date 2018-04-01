import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


// Include your React components like this:
import App from './components/app.js';

// import MyComponent from 'components/my_component';
require("file-loader?name=[name].[ext]!./index.html");
require("./styles.scss");

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={App} />
        </Route>
    </Router>,
    document.getElementById("placeholder")
);
