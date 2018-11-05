//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log("app.js is running");

// JSX - javascript XML

const app = {
    title: 'Indecision App',
    subtitle: 'It started!',
    options: ['One', 'Two']
};

const template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length>0 ? 'Here are your options': 'No options'}</p>
    <ol>
        <li>line one</li>
        <li>line two</li>
    </ol>
</div>
);

let count = 0;
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button id="my-id" className="button">+1</button>
    </div>
)
console.log(templateTwo)
const appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot);