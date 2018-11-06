'use strict';

var app = {
    title: 'Visibility Toggle',
    detailed: false,
    description: 'This is detailed description'
};

var onDetails = function onDetails() {
    app.detailed = !app.detailed;
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: onDetails },
            app.detailed ? "Hide details" : "Show details"
        ),
        app.detailed && React.createElement(
            'p',
            null,
            app.description
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
