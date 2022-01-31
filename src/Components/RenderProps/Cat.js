import React from "react";
import './RenderProps.scss';

class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src="./cat.png"  alt='cat icon' style={{ position: 'absolute', left: mouse.x, top: mouse.y, height: '55px' }} />
      );
    }
  }

export default Cat;