
import React, { Fragment } from "react";
import { ThemeContext } from './context-data';
import ThemedButton from "./themed-button";
import ErrorBoundary from './ErrorBoundaries';


class CustomContext extends React.Component {

    componentDidMount() {
        console.log(this.context);
        console.log("----from Context-------");
    }

    render() {
        return(
            <Fragment>
                <ThemeContext.Provider value={this.context}>
                <ErrorBoundary>
                <ThemedButton />
                </ErrorBoundary>
                <ThemedButton value={this.context} />
            </ThemeContext.Provider>
            </Fragment>
            
        );
    }
}

CustomContext.contextType = ThemeContext;

export default CustomContext;