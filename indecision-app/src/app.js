console.log("app.js is running");

// JSX - javascript XML

var app = {
    title: 'Indecision App',
    subtitle: 'It started!'
};

var template = (
<div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
        <li>line one</li>
        <li>line two</li>
    </ol>
</div>
);

var user = {
    name: 'Jacek',
    age: 29,
    location: 'Wrocław'
};

var userName = 'Jacek';
var userAge = '29';
var userLocation = 'Wrocław';

var templateTwo = (
<div>
    <h1>{'Hello, ' + user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
</div>);

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);