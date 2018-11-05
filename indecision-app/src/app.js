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
const addOne = () => {
    count++
    renderCounterApp();
}
const minusOne = () => {
    count-- 
    renderCounterApp();
}
const resetCount = () => {
    count=0
    renderCounterApp();
}

const appRoot = document.getElementById('app')

const renderCounterApp=() => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    )

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();