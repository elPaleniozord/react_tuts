class VisibilityToggle extends React.Component{
    constructor(props){
        super(props)
        this.handleToggleVisiblity=this.handleToggleVisiblity.bind(this)
        this.state={
            visibile: true,
            description: 'This is some description'
        }
    }
    handleToggleVisiblity(){
        this.setState((prevState)=>{
            console.log(this)
            return{
                visibile: !prevState.visibile
            }
        })
    }
    render(){
        return(
            <div>
                <h1>VISIBILITY TOGGLE</h1>
                <button onClick={this.handleToggleVisiblity}>
                    {this.state.visibile? "Hide details":"Show details"}
                </button>
                {this.state.visibile && <h2>{this.state.description}</h2>}                    
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'))
// const app = {
//     title: 'Visibility Toggle',
//     detailed: false,
//     description: 'This is detailed description'
// }

// const onDetails = ()=>{
//     app.detailed = !app.detailed;
//     render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={onDetails}>{app.detailed ? "Hide details" : "Show details"}</button>
//             {app.detailed && <p>{app.description}</p>}
//         </div>
//     )
//     ReactDOM.render(template, appRoot)
// }

// render();