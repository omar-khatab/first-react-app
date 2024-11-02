// react consider the group of components and these components are js functions 
// the App.js is the main component (root element) that all components are part of it and show inside him 
// even if separate the components in files, and App.js is the first thing will show , as soon as open the page

import logo from './logo.svg';
import './App.css';
// import the component and can change his name 
import Mysecondcomponent from './Mysecondcomponent'
// to import file we don't need write name for it
import './Firstreactcss.css'
import Changecontent from './props';
import RenderShow from './RenderingApp';
import Changetext from './Changetext';
import Myinput from './Myinput';
import Myform from './Myform';
import Arraystate from './Arraystate';
import Repeatedstate from './Rebeatedstate';

// app function is the parent component
function App() {
  
  const x =10;
  const person = {
    name:"omar",
    email:"omar@gmail.com"
  }
  // we make object as css properties can use him to elements and this is useful in use this css properties as js variable and
  // give this variable to any element
  const elmStyle = {
    backgroundColor: "red",
    fontSize: "20px",
    boxShadow : "0px 10px 10px black",
  }

  // make variables to use them as attributes 
  let firstContent = `I am learning the react now to understand
  the frontend`

  let secondContent = `The learning process requires great effort and be patient`


  // this is the array to add data(text) to lists with rendering list
  const  myList = [
    // make objects and add id for every element to differ between every element li as this make react deal with every
    // element and can recognize on it easily by using key attribute in li element and here we pass id to key to differ 
    // every li element than another and here as soon ass add new object or delete one this will reflect on li elements
    {id:1, title: "doing homework"},
    {id:2, title:"reading a book"},
    {id:3, title:"studying"},
    {id:4, title:"cleaning my room"},
  ] 

// we add element of array inside the li element
  const finalList = myList.map((li) => {
    return (<li key ={li.id} >{li.title}</li>)
  });

  // print them as array of objects
  console.log(finalList)

  return (
    // This is the jsx (java script with html) means write html code inside js
    // if we put {} inside html this means anything inside {} is considered js
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Inside the style must be js object */}
        <h1 style={elmStyle} >{x + 10}Hello React {sayHello()} {person.email}</h1>
        <h3 style={elmStyle} >To understand the react js</h3>
        {/* we can put style value directly but this value must be inside another carly brackets as style accept js object only*/}
        <p style = {{backgroundColor:"blue"}}>we should going on</p>
        {/* Class attribute in jsx called className and inside him write string and can write more than class by separate them with 
        space and can write class value without carly brackets but can't use js inside him, so we put carly brackets to use js
        inside the class and we use this classes inside the css file and make import to it here */}
        <span className={"active fine"}>Using Css in the React</span>
        {/* we use the if statement in the class */}
        <span className={person.name === "omar" ? "active" : "fine"}></span>
        {/* the attributes must be camelCase like onClick and write function inside the onClick(event) without brackets */}
        <button onClick={hint}>Hint</button> 
        <Mysecondcomponent />
        {/* To call function (component we should put it inside the app with this from) and can write the function
        like html tag like <div></div> but we use the self-closing element like <div/> */}
        <Myfirstcomponent /> 
        {/* child component */}
        <Mysecondcomponent />

        {/* these components can give them custom attributes with particular names and is considered argument of the function*/}
        {/* we must write the attribute with camelCase as js don't know snake case like person-name but personName means
        in the function if write the parameter with snake case , this is make error */}
        <Changecontent name ="Hady" email="hady@gmail.com" content={firstContent} />
        <Changecontent name ="mohamed" email="mohamed@gmail.com" content={secondContent} />

        {/* we can use the props deeperly like make props send jsx don't text only or more complex things and this by make
        the component with normaly tag of html*/}
        <Changecontent name ="Ahmed" email="ahmed@gmail.com">
          {/* this is show as nested object have key called children */}
          <h3>JSX props</h3>

        </Changecontent>
          {/* this element will not show as title is empty  */}
        <Showapp/>
        {/* this element will show as title is not empty */}
        <Showele title = "show"/>
        <Showele/>
        <Showsecond title = "show-again"/>

        {/* Rendering list this is best than props when the project is large you want good practice to add text or anything
        to elements */}
        <div>
          {/* this is not best practice to rendering list as we change something in a particular list, i want to change it
          in rest lists so i can separate the data (text) from lists and store them in arrays and make loop on them */}
          <ul>
            {finalList}
          </ul>
        </div>
            {/* State is a data in a particular time and data means values of variables in your project 
            for example if we have two inputs to get the sum what inside them if we change the number in any inputs from them
            this mean the state is changed as any change means state change and state management is the method of decision or reflection
            that we make on visual elements or code at a particular state for example if a new person entered the website 
            this is considered the state and login button or sign button is the state management if the person became user
            in website whenever the state change and now we must change the ui (features and elements) 
            of website upon the state changed and when the user enter on his profile, isn't allowed to show him 
            page login but his profile. this means reflect the right state in the right time this means also 
            you must sort your code upon the right state (state management*/}

        {/* react deal with the DOM in page with virtual DOM , The react make vritual DOM and modify on him firstly
        as modify on the basic DOM  is take time and more resources . in every time the react have copy from this virtual DOM
        and any modification on it will reflect on basic virtual DOM by comparing two copies with each other then pass 
        this modification on the basic DOM. the react make rerender on the component that the modification applied on it
        Rerendering : changing process upon on change the data and reflect it on the ui (change the state)*/}
        <Changetext/>
        <Myinput/>
        <Myform/>
        <Arraystate/>
        <Repeatedstate/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


function sayHello () {
  return `Never give up`;
}

function hint () {
  alert("hello")
}

// Component , can put component in the separate file and this is the common
// nested component: use component inside another component
function Myfirstcomponent() {
  return (
    // every component must have on tag, so we put all tags inside div or empty tag (<></>)
    <div>
      <h1>Hello World</h1>
      <p>paragraph</p>
      <button>Click Me</button>
    </div>
  );
}
// Rendering is the process of show the visible codes on the screen
// Conditional Rendering : show the visible codes (jsx codes) on the screen upon on condition

const showCategeory = true;

function Showapp () {
  if (showCategeory === true) {
    return <RenderShow />
  } else {
    return null
  }
}

// if title is empty, the button won't appear

function Showele ({title}) {
  if (title == null || title === "") {
    return null
  }

  return (
    <button>if show</button>
  )
}

// another method to use conditional rendering

function Showsecond ({title}) {
  return (
    <div>
      {title == null || title === "" ? <div></div> : <button>if show again</button>}
    </div>
  )
}

export default App;
