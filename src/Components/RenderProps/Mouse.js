
import React from "react";

class Mouse extends React.Component {

    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {x: 0, y:0};
    }

    //  is invoked before rendering when new props or state are being received(Called before updating component). 
    //  Defaults to true. 
    // This method is not called for the initial render or when forceUpdate() is used.
    shouldComponentUpdate(nextProps, nextState) {
        // console.log(this.state);
        // console.log(nextState);
        if((this.state.x !== nextState.x) || (this.state.y !== nextState.y)) {
            return true;
        }
        return false;
      }
    
    // is  invoked right before calling the render method, both on the initial mount and on subsequent updates
    static getDerivedStateFromProps(props, state) { 
        console.log("getDerivedStateFromProps : is  invoked right before calling the render method, both on the initial mount and on subsequent updates");
        console.log(state);
        return state;
    }
    //getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM.
    // Alternative is  :  componentDidUpdate()
    getSnapshotBeforeUpdate(prevProps, prevState) {

    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }
    
    render() {
        return (
            <>
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}></div>
             {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
            */}
            {this.props.render(this.state)}
            </>
        );
    }
};

export default Mouse;