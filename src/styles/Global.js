import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Roboto Slab', serif;
        -webkit-font-smoothing: antialiased;
        background: ${({theme}) => theme.COLORS.BACKGROUND_700};
        color:${({theme}) => theme.COLORS.WHITE};
    }
    li {
        list-style: none;
    }
    span, li {
        font-family: 'Roboto', sans-serif;
    }
    input {
        font-style: normal;
        font-weight: 400;
    }
    
    a {
        text-decoration: none;
    }
    button, a {
        cursor: pointer;
        transition: filter .2s;
    }

    button:hover, a:hover {
        filter: brightness(.7);
    }
`;