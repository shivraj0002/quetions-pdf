'use client'
// mui custom themes 
const { createTheme } = require("@mui/material");

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

const theme = createTheme({
    palette: {
        common: {
            blue: arcBlue,
            orange: arcOrange,
        },
        primary: {
            main: arcBlue
        },
        secondary: {
            main: arcOrange
        },
        arcWhite: {
            main: '#ffffff'
        }
    },
    typography: {
        tab: {
            fontFamily: 'Raleway, Poppins, sans-serif',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1rem',
        },
        appointment: {
            fontFamily: 'Poppins',
            fontSize: '1rem',
            textTransform: 'none',
            color: 'white'
        }
    }
})

export default theme