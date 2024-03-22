import Age from "./Age"

function Welcome(props){
return(
    <>
<h2> Welcome, <strong>{props.name}</strong>!</h2>
{props.age > 18 && <Age age={props.age}/>}
{props.age && <Age age={props.age}/>}
{props.age > 18 && props.age < 65 && <Age age={props.age}/>}
{props.age > 18 && props.age < 65 && props.name === "Jhon" && <Age age={props.age}/>}
<Age age={props.age}/>




</>)}
export default Welcome