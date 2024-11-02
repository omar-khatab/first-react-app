import { useState } from "react"

let nextId = 5
export default function Arraystate () {
    const [deviceName, setDeviceName] = useState("")
    // don't enable useState as device is assign alone don't inside the useState to make rerender and keep on the value , so we 
    // will use another useState and add the array like primary value to useState
    // const devices = ["iphone", "mac" , "samsung" , "window"]
    // here we use useState and add array like primary value to useState , finally state variable only don't accept assign(=) 
    // or called mutation but if we make copy from useState variable we can use assign(=) like objects and arrays in useState
    // const [devices, setDevices] = useState(["iphone", "mac" , "samsung" , "windows"])
    // here we make array of objects to put id for every element to distinguish it
    const [devices, setDevices] = useState([
        {id:1, name:"iphone"}, 
        {id:2, name:"mac" }, 
        {id:3, name:"samsung"}, 
        {id:4, name:"windows"},
    ]);
    // counter to add id dynamic with add button
    const devicesList = devices.map((d) => {
        // every list should have unique key
        return <li key={d.id}>
                    {d.name} 
                    {/* here we call function inside function to pass parameters for it  */}
                    <button onClick={() => {handleDeleteClick(d.id)}}>Delete</button>
                    <button onClick={() => {handleEditClick(d.id)}}>Edit</button>
                </li>
    });
    function handelAddClick () {
        // don't use assign operator to make a new array and add values inside it and then put it inside useState function
        // as this is a pass by reference like the object we must make a copy of original array
        // so we can use assign operator with copy variable from useState variable only
        setDevices([...devices, {id: nextId, name:deviceName}])
        // don't make problem with assign operator as this variable don't related with useState
        // hint : uniray operator (++) means make assign to useState variable
        nextId = nextId +1
    }
    // function to delete the elements array
    function handleDeleteClick (id) {
    //      // here id don't related with index so will delete don't work with right
    //      newDevices.splice(id-1, 1)
    //      setDevices(newDevices)
    //      // the right method to delete
    //      // let index=0;
    //      let selectIndex = 0
    //      // here we will use pass by value to modify on the useState
    //      const newDevices = [...devices]
    //      for(let device of newDevices) {
    //         // we target element with id by knowing its index
    //         if (device.id === id ) {
    //             selectIndex = index
    //         }
    //         index++;
    //     }
    //     newDevices.splice(selectIndex,1)
    //     setDevices(newDevices)
    //     // we use filter higher order function to delete array elements
        let newDevices = devices.filter((device) => {
            return device.id !== id
        })
        setDevices(newDevices)
    }
    function handleEditClick (id) {
        const newDevices = devices.map((device) => {
            if (device.id == id) {
                let newDevice = {...device, name: device.name + "0"}
                return  newDevice
            } else {
                return device
            }
        })
        setDevices(newDevices)
    }
    return (
        <div style={{marginTop:"20px", fontSize: "30px"}}>
            {devicesList}
            <div>
                <input type="text" value={deviceName} onChange={(e) => setDeviceName(e.target.value)}></input>
                <button onClick={handelAddClick}>Add</button>
            </div>
        </div>
    )
}