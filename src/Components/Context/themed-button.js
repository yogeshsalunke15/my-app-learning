import React from "react";
import { ThemeContext, themes } from './context-data';
import InnerButton from './innerButton';

class ThemedButton extends React.Component {
    constructor() {
        super();
        this.state = { counter: 0 };
    }
    componentDidMount() {
        console.log(this.context);
        console.log("----from ThemedButton-------");
    }
    handleClick() {
        this.setState(({counter}) => ({
          counter: counter + 1
        }));
      }
    render() {
        if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error('I crashed!');
          }
      return (<> <h1 onClick={this.handleClick.bind(this)}>{this.state.counter}</h1>
              <InnerButton />
              </>
          )
    }
  }
  ThemedButton.contextType = ThemeContext;
  export default ThemedButton;