class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        )
    }
}
class Action extends React.Component{
       render(){
           return(
               <div>
                   <button>What should i do?</button>
               </div>
           )
       }
   }

class Options extends React.Component{
    render(){
        return(
            <div>Options:</div>
        )
    }
}

class AddOptions extends React.Component{
    render(){
        return(
            <button>Add Option</button>
        )
    }
}

   const jsx =(
       <div>
           <h1>Title</h1>
           <Header />
           <Action />
           <Options />
           <AddOptions />
       </div>
   )

   ReactDOM.render(jsx, document.getElementById('app'))