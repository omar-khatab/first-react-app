// this will not work as button can't change the text inside h2 as we make change locally means the change is done 
// inside the component , so this don't trigger the rerendering
// second reason for text wil not change as rerendering will load these component from zero and local variable will return to origin
// value and doesn't keep same value during rerendering process
// to solve this problem we use useState hook and hooks are functions that react introduce for you to new features
// useState changes the state and keep on it between the rerendering and trigger react to rerender and rerender done for the component
// to use any hook we must import it from the react liberary
import { useState } from "react";
let textChange = "omar";
export default function Changetext () {
    // useState will return array have to element the first is primary variable (omar) and another is function
    // useState carry the primary variable with any type that is want to change its state and function will use it when you want
    // to change primary variable and as soon as change the primary value this will make react make rerender for this component
    // react compare the current state with the related with the component and see the change and do it
    console.log(useState("omar"));
    let State = useState("omar");
    let value = State[0] // will return omar as useState return array have two element we target first index 
    let setValue = State[1];
    // make destructuring array with useState and common name for primary value is its name and function take setName like value
    // and setValue or get and setGet
    // const [name, setName] = useState("omar")
    // make function to change the value inside the useState
    function Changedirectly () {
        setValue(value === "omar" ? "essam" : "omar");
        // for destructuring array
        // seName("essam")
    }
    return (
        <div>
            <button onClick = {changeVariable}>No change the text</button>
            <button onClick={Changedirectly}>
                change the text
            </button>
            <h2>{textChange}</h2>
            {/* here add the primary value to use the useState */}
            <h2>{value}</h2> {/* write {name} inside h2 for destructuring array*/}
        </div>
    )
}
function changeVariable () {
    textChange = "essam";
}
