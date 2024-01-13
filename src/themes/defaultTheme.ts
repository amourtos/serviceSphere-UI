// themes/customTheme.ts
import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#25b38d', // Custom primary color
        },
        secondary: {
            main: '#131716', // Custom secondary color
        },
        text: {
            secondary: '#c5c9c8', // Custom text color
        },
    },
});

export default defaultTheme;
