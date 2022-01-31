import { useContext } from "react";
import { ThemeContext } from "./context-data";

function InnerButton() {
    const theme = useContext(ThemeContext);
    console.log(theme);
    return(
        <div>
        <span style={{background: theme.background, color:theme.foreground}}>My name is Yogesh Salunke !</span>
        </div>
    );
};

export default InnerButton;