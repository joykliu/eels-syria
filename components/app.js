import React from 'react';
import ReactDom from 'react-dom';

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='wrapper'>
                renders yay
            </div>
        )
    }
}

App.childContextTypes = {
  currentUser: React.PropTypes.string
}
