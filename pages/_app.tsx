import "../styles/globals.css"
import React from "react"
import { AppProps } from "next/app"
import { wrapper } from "../store"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { purple, cyan } from "@material-ui/core/colors"

// Custom theme with material ui
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: cyan,
  },
})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default wrapper.withRedux(MyApp)
