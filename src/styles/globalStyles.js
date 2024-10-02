import { createGlobalStyle } from "styled-components";

const MyGlobalStyles = createGlobalStyle`

* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
    font-family: "Poppins", sans-serif;
    height: 100%;
    background-color: #fff
}

`;

export default MyGlobalStyles;
