const app = {
    title: 'Visibility Toggle',
    detailed: false,
    description: 'This is detailed description'
}

const onDetails = ()=>{
    app.detailed = !app.detailed;
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onDetails}>{app.detailed ? "Hide details" : "Show details"}</button>
            {app.detailed && <p>{app.description}</p>}
        </div>
    )
    ReactDOM.render(template, appRoot)
}

render();