import { useState } from "react"

export default function Repeatedstate () {
    const [count, setCount] = useState(0)
    return (
        <>
        <h2 style={{marginBottom: "5px"}}>The count is: {count}</h2>
        <button 
            onClick= {Plustwo}>
            +2
        </button>
        </>
    )
    function Plustwo () {
        // here will increase the number with one only as every setCount will see the current count, not second setCount will see
        // the value from the first setCount means every setCount will see the number 0 in the start
        // means also the setCount see the count value in the time that setCount written (or the setCount take snapshot from the
        // written code in the start) also setTimeOut don't solve the problem 
        // as the setCount actually take snapshot from the code in the time you write it
        // setCount(count + 1)
        // setCount(count + 1)
        // solution of the problem by using callback function inside the setCount and c is carry the last value of the count
        setCount((c) => {
            return c+1
        })
        // this is mistake to make another setCount as setCount take snapshot from the code so, we will do another one 
        // with callback function but we can do this function with count but we call it firstly as take the primary
        // value of count and the setCount with callback function will take the last count value
        // setCount(count+1)
        setCount((c) => {
            return c+1
        })
    }
}