import { createTheme, responsiveFontSizes } from "@mui/material/styles"

 const A = createTheme({
    palette: {
      action: {
        disabledBackground: '#c29200',
        disabled: '#fff454'
      },
      primary: {
        main: "#fac213",
        light: "#fff454",
        dark: "#c29200",
        contrastText: '#000',
      },
      secondary: {
        main: "#f77e21",
        light: "#ffaf53",
        dark: "#be4f00",
        contrastText: '#000',
      }
    },
    typography: {
      fontFamily: [
        'Poppins', 'sans-serif'
      ].join(','),
      h2: {
        fontSize: '2rem'
      }
    },
  })
  export const B = createTheme({
    palette: {
        action: {
          disabledBackground: '#00121b',
          disabled: '#36616d'
        },
        primary: {
          main: "#033742",
          light: "#36616d",
          dark: "#00121b",
          contrastText: '#ffffff',
        },
        secondary: {
          main: "#39a2db",
          light: "#76d3ff",
          dark: "#0074a9",
          contrastText: '#000',
        }
    },
    typography: {
      fontFamily: [
        'Poppins', 'sans-serif'
      ].join(','),
      h2: {
        fontSize: '2rem'
      }
    },
  })
export const winterTheme = responsiveFontSizes(B)
export const summerTheme = responsiveFontSizes(A)
