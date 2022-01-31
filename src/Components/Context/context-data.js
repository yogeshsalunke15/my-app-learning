import React from "react";

export const themes = {
    light: {
      foreground: '#000000',
      background: 'red',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };
  
  export const ThemeContext = React.createContext(
    themes.light // default value
  );