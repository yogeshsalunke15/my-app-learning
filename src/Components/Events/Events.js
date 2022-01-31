import React from 'react';

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toggle:true};
    }
    
    handleClick(nm, evnt){
        console.log(nm);
        console.log(evnt);
        this.props.onEventClick(nm);
        this.setState(prevState => ({toggle: !prevState.toggle}));
       // this.setState((prevState) =>(this.state={toggle: !prevState.toggle}));
    }

    render() {
        return(
            <div>
            <button onClick={this.handleClick.bind(this, 'yogesh salunke')}>
                {this.state.toggle ? 'ON' : 'OFF'}
            </button>
            
            {this.props.children}
            </div>
        );
    }
}

export default Events;