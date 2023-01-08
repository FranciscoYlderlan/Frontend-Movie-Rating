import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
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