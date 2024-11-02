import { useState } from "react";
// use the form like a full experment with the inputs

export default function Myform () {
    // preferred use one state when there are more than one inputs related with each other , form here we can fill the primary value
    // of the state with any data type like the arrays or objects 
    // const [nameInput , setNameInput ] = useState("")
    // const [emailInput , setEmailInput ] = useState("")
    const [formInputs, setFormInputs] = useState(
        {name: "",
        email: "" ,
        age: "",
        general: "",
        isStudent: false,
        country: "",
        status: "",
        });
        // function for checkBox below
        function handleCheckBoxChanged(e) {
            // use checked as we pass to input checked attribute and this attribute return boolean value so, we don't need
            // to use if condition for different data type
            setFormInputs({...formInputs, isStudent: e.target.checked})
        }
    return (
        // make submit don't refresh the page and send the data as i want make something don't need to it refresh the page
        <form onSubmit={(e) => {
            e.preventDefault();
            // After preventDefault make anything i want with submit
            // console.log(nameInput,emailInput)
            // const bodyParam = {
            //     name: nameInput,
            //     email: emailInput,
            // }
        }}>
            <label>Name:</label>
            <input
            // value = {nameInputs.name}
            value = {formInputs.name}
            // not allowed to assign useState function to target value with this method when the value of useState is an object
            // onChange={(e) => setNameInput(e.target.value)}
            // this is mistake as here we said to function to make new object have one key only called name  
            // onChange={(e) => setFormInputs({name : e.target.value})}
            // this is a solution as we keep the email value during changing the name value and now i can benefit from the object
            // with new values during the onchange event
            onChange={(e) => setFormInputs({name : e.target.value , email: formInputs.email})}/>
            <hr></hr>
            <label>Email:</label>
            <input   
            // value = {setNameInputs.email}
            value = {formInputs.email}
            // onChange={(e) => setEmailInput(e.target.value)}
            onChange={(e) => setFormInputs({email: e.target.value , name : formInputs.name})}/>
            <hr/>
            <label>Age:</label>
            <input
            value = {formInputs.age}
            onChange={(e) => {
            // we use another object to assign useState object as maybe the properties in the object become a lot and be hard to handle
            // but this is not working as we use = and this is not allowed in the useState as this doesn't trigger rerender
            // and will not keep the value as this is a pass by reference means two variable names (pointer) 
            // for the same value (same memory place) , so we use pass by value means make copy from the useState object 
            // and this copy is independent of useState object as we change the useState value from the function only
            // const newFormInput = formInputs;
            // newFormInput.age = e.target.value;
            // setFormInputs(newFormInput)
            // solve this problem above, we use pass by value as js deals with object variable with
            // pass by reference and the solution by adding a spread operator to original object to take copy from it(pass by value)
                // const newFormInput = {...formInputs};
                // newFormInput.age = e.target.value;
                // setFormInputs(newFormInput)
            // use short(best) code for the above 
            setFormInputs({...formInputs, age :e.target.value});
            }}/>
            <hr/>
            <label>General Info</label>
            {/* <textarea onChange={(e) => setFormInputs({...formInputs, general :e.target.value})}> */}
            {/* another method to make textarea self closing */}
            <textarea value={formInputs.general} onChange={(e) => setFormInputs({...formInputs, general :e.target.value})}/>
            <hr/>
            {/* Best way to relate checkBox with useState by using boolean value but you can use any data type */}
            {/* using checked attribute with useState by passing boolean value to checked attribute */}
            {/* if e.target.value have data type different from the key value of useState object, we can use if condition
            like if value of input have string data type and key value of oject have boolean data type, whenever use if condition */}
            <label>Student</label>
            <input type="checkbox" checked = {formInputs.isStudent} onChange={handleCheckBoxChanged}/>
            <hr/>
            {/* Using select with useState */}
            <select value={formInputs.country} onChange={(e) => setFormInputs({...formInputs, country: e.target.value})}>
                <option>KSA</option>
                <option>Egypt</option>
                <option>Syria</option>
            </select>
            <hr/>
            {/* using radio input with useState */}
            <div>
                {/* here we write condition inside the attribute (prop) checked to deal with useState with radio input and we must pass value to
                radio that we depend on it in checked attribute as there is default value pass to value attribute (prop) equal on when checked */}
                <input value="student" type="radio" name="status"
                onChange={(e) => setFormInputs({...formInputs, status: e.target.value})}/>Student
                <input value="teacher" type="radio" name="status" 
                onChange={(e) => setFormInputs({...formInputs, status: e.target.value})}/>Teacher
            </div>
            <hr/>
            <button>Submit</button>
        </form>
    )
}
