import React from 'react'
import { useSelector, useDispatch, useStore } from "react-redux";

// import { addUsr, initialUserState } from './Users/userSlice';
import { updateUser, addUser} from './userSlice';


const AddUsers = () => {
    const store = useStore();
    console.log(store.getState()); // get Complete Application State 
    console.log('-------------Prinitng Complete State of App--------');
    //const initialUser = useSelector(initialUserState);
    const initialUser = useSelector((state) => state.users);
    console.log(initialUser);
    const dispatch = useDispatch();
    
    const addUsr = () => {
        dispatch(addUser({
            name: 'Saanvi Yogesh Salunke',
            age: 3,
            location: 'Pune, MH INDIA'
        }));
    }

    return (
        <div> Below Functionality is using Redux !
        <br/>
        <br/><b>Initial State:</b> {JSON.stringify(initialUser)}<br/>
            <button aria-label="Add user" onClick={addUsr}> Add User</button>
          <br/>
          <button aria-label="remove user" onClick={() => dispatch(updateUser({
            name: 'Megha Yogesh Salunke',
            age: 3,
            location: 'Pune, MH INDIA'
        }))}> Remove User</button>
        </div>
    );
};

export default AddUsers;