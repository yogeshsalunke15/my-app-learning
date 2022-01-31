import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOM from 'react-dom'

class CustomPortal extends React.Component {
    constructor(props) {
        super(props);
        this.elemnt = document.createElement('div');
      }
    render() {
        return ReactDOM.createPortal(
            this.props.children, 
            document.getElementById('dom-location')
            );
    }
}

export default CustomPortal;