import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    body {
        height: 100vh;
        font-family: 'Roboto Slab', serif;
        -webkit-font-smoothing: antialiased;
        background: ${({theme}) => theme.COLORS.BACKGROUND_700};
        color:${({theme}) => theme.COLORS.WHITE};
    }
    li {
        list-style: none;
    }
    span, li, p {
        font-family: 'Roboto', sans-serif;
    }
    input {
        font-style: normal;
        font-weight: 400;
        color:${({theme}) => theme.COLORS.WHITE};
    }
    
     a {
        text-decoration: none;
    }
     a {
        cursor: pointer;
        transition: filter .2s;
    }

    a:hover {
        filter: brightness(.7);
    }

    main::-webkit-scrollbar {
        width: 25px; 
    }
    main::-webkit-scrollbar-track {
        background: transparent;    
    
    }
    main::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 20px 20px ${({theme}) => theme.COLORS.PINK};
        border: solid 7px transparent;
        border-radius: 20px; 
        background-clip: padding-box;
    }

`;