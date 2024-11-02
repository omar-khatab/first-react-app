// props is the parameter of the function that make me change some things in the function (component) like text inside it
// but i need the type and form of the component 
// para is an object parameter show all attributes of component in form of object 

// export default function Changecontent (para) {
//     // can add property in a variable 
//     const person = para.name;
//     // children is the preserved name in jsx don't like any attributes that you name as children express about what inside
//     // the component tag
//     // show the jsx props
//     const children = para.children;
//     return (
//         <div style={{backgroundColor: "#ccc", color: "black", margin: "10px"}}>
//             {/* we target attribute in the called component */}
//             <h1>{person}</h1>
//             <h3>{para.email}</h3>
//             <h3>2001</h3>
//             <hr/>
//             <p>lsrgeargqergergwewegfrweger</p>

//             {children}
//         </div>
//     )
// }

// can make object destructuring and we must use same name attribute in the parameter here and can write default value if nothing
export default function Changecontent ({name, email, content= "No content", children}) {
    return (
        <div style={{backgroundColor: "#ccc", color: "black", margin: "10px"}}>
            <h1>{name}</h1>
            <h3>{email}</h3>
            <h3>2001</h3>
            <p>{content}</p>
            <p>{children}</p>
            <hr/>
        </div>
    )
}