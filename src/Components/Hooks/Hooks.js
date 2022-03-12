
import React, { useState, useEffect } from "react";

import CustomReducerHook from "./reducerHook";
/**
 * You can’t use Hooks inside a class component, 
 * but you can definitely mix classes and function components with Hooks in a single tree.
 */
const CustomHooks = (props) => {

    const [count, setCount] = useState(0);
    const [user, updatedUser] = useState({
        name: 'Yogesh Salunke',
        age: 32,
        location: 'Pune',
        hobies: 'Driving,  Travelling'
    });
    
    /**
     * useLayoutEffect()  => Returns a memoized value
     * memoisation: is an optimization technique used primarily to speed up computer programs by storing the results
     *  of expensive function calls and returning the cached result when the same inputs occur again
     */

    /**
     * useMemo()  =>  fires synchronously after all DOM mutations
     * Use this to read layout from the DOM and synchronously re-render.
     *  
     */

    /**
     * you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount as combined
     * componentDidMount / componentDidUpdate / componentWillUnmount all these three methods work is done by useEffect only
     *  React guarantees the DOM has been updated by the time it runs the effects.
     *  If your effect returns a function, React will run it when it is time to clean up(subscriptions or any other)
     */
     useEffect(() => {
         document.title = `${user.name} at age ${user.age} from ${user.location} with count as ${count}`;
     }, [user, count]);

    // with unsubscription
     useEffect(() => {
        const customInterval = setInterval(() =>{
            //console.log('Calling set Interval inside Effect and unsubscribing it ');
        }, 2000);
        
        console.log(props);
        // unsubscribing from interval
        return () => { console.log('Unsubscribing the interval --!');
            props.unsubscribingEffect();
            clearInterval(customInterval);
        }

     }, [props]);

    const updateCounter = () => {
        console.log(count, '------counter ------');
        setCount(count + 1);
        updatedUser(prevUser => { return {...prevUser, hobies: 'Travelling, ganapati Dancing --'+ count}});
    }

    return(
        <> <div>
            user count is : {count}
            <button onClick={updateCounter}> Click me to Increase Counter !</button> {' '} 
            <label>Hobies:</label> {user.hobies}
        </div>
            <br/><br/><br/>
                <CustomReducerHook />
            <br/>
        </>
    );
}


export default CustomHooks;