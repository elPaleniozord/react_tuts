'use strict';

console.log("app.js is running");

// JSX - javascript XML

var app = {
    title: 'Indecision App',
    subtitle: 'It started!'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
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

var user = {
    name: 'Jacek',
    age: 29,
    location: 'Wrocław'
};

var userName = 'Jacek';
var userAge = '29';
var userLocation = 'Wrocław';

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Hello, ' + user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
