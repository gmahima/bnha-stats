import React from 'react'
import "tailwindcss/dist/base.min.css"
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
   body {
     margin: 0;
     padding: 0;
     font-family: Open-Sans, Helvetica, Sans-Serif;
     text-align: center;
  
   }
 `;
 
const App = ({Component, pageProps}) => (
    <>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
)
export default App