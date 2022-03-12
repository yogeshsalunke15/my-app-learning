import React from "react";
import { useState } from "react";


// const StateManagment = () => {
//     const [userInfo, setUserInfo] = useState({Firstname:'Yogesh', lastname:'Salunke'});

//     return(
        // <div>
        //     <p>UserInfo: {JSON.stringify(userInfo)}</p>
        //     <button onClick={() => setUserInfo({Firstname:'Saanvi'})}>Update userInfo JSON</button>
        // </div>
//     );
// }

class StateManagment extends React.Component {
    constructor() {
        super();
        this.state = {Firstname:'Yogesh', lastname:'Salunke'};
    }

    render() {
        return (
        <div>
            <p>UserInfo: {JSON.stringify(this.state)}</p>
            <button onClick={() => this.setState({Firstname:'Saanvi'})}>Update userInfo JSON</button>
        </div>
        )
    }
}

export default StateManagment;

// setState => merges / udates previous state with new values (Class based component)
	
// 	useState => creates new state every time.  Unlike the setState method found in class components, useState does not automatically merge update objects.
// 	To Merge with previous state we should do like 
// 		const [state, setState] = useState({});
// 		setState(prevState => {
// 		  // Object.assign would also work
// 		  return {...prevState, ...updatedValues};
// 		});
