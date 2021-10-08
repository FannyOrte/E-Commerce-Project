import React from "react";
import {ThemeProvider} from '@mui/material/styles';
import theme from "./src/globals/theme";

export const wrapRootElement = ({element}) => {
    return (<ThemeProvider theme={theme}> {element}</ThemeProvider>);
};
