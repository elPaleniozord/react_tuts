import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.children}
            <p>footer</p>
        </div>
    )
}

ReactDOM.render(<IndecisionApp options={['Devils den', 'Second District']} />, document.getElementById('app'))