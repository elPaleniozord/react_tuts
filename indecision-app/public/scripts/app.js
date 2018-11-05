'use strict';

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log("app.js is running");

// JSX - javascript XML

var app = {
    title: 'Indecision App',
    subtitle: 'It started!',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'line one'
        ),
        React.createElement(
            'li',
            null,
            'line two'
        )
    )
);

var count = 0;
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { id: 'my-id', className: 'button' },
        '+1'
    )
);
console.log(templateTwo);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
