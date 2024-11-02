// use the input with the useState
import { useState } from "react"
// any variable filled in a component should be in the state to deal with it right
export default function Myinput () {
    const [myInputValue, setMyInputValue] = useState("");
    function inputChange (event) {
        // we can't change the input value inside the page as it's related with state
        // as the state here every time change the input value , it will not show it as the state have empty value
        // means the react see the state has empty value , so every time change the input value , the react doesn't show him
        // means every rerendering after the onchange event the react see the state has empty value
        // console.log(event.target.value);
        // to solve this problem we pass the useState function here to change the useState value
        // we use the useState with the input to access to input value during submitting in the react. the State is considered the 
        // variable for the input that related with it
        setMyInputValue(event.target.value)
    }
    return (
        <div>
            <label>Your Name</label>
            {/* method to use anynmouse function */}
            {/* <input onChange={() => {
                alert("hello")
            }}/> */} 
            <input onChange={inputChange} value={myInputValue}/>
        </div>
    )
}