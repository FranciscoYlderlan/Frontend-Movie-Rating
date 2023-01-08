import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    body {
        background: ${({theme}) => theme.COLORS.BACKGROUND_700};
    }
    
    a {
        text-decoration: none;
    }
    button, a {
        cursor: pointer;
        transition: filter .3s;
    }

    button:hover, a:hover {
        filter: brightness(.9);
    }
`;