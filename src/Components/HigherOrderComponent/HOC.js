import React from "react";
import WrappedComponent from "./WrappedComponent";
//syntax 1

// const HOC = HOCWrapper => {
//     class HigherOrderComponent extends React {
//         render() {
//             return (
//                 <div>
//                     <span>Displaying Wrapped Component in HOC !</span>
//                      <HOCWrapper></HOCWrapper>
//                 </div>
//             )
//         };
//     }
//     return HigherOrderComponent;
// }


// Syntax 2

function HOC(WrappedComp) {
    return class extends React.Component {
        render() {
            return(
                <div>
                    <h3>Displaying Wrapped Component in HOC !</h3>
                    <WrappedComp></WrappedComp>
                </div>
            )
        }
    }

}

export default HOC(WrappedComponent);