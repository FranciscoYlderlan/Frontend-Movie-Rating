import { createGlobalStyle } from "styled-components";


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
    input, textarea {
        font-family: 'Roboto Slab', serif;
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
        box-shadow: inset 0 0 0px 20px ${({theme}) => theme.COLORS.PINK};
        border: solid 7px transparent;
        border-radius: 20px; 
        background-clip: padding-box;
    }

    main {

        mask-image: linear-gradient(to top, transparent, black),
            linear-gradient(to left, transparent 17px, black 17px);
        mask-size: 100% 20000px;
        mask-position: left bottom;
        -webkit-mask-image: linear-gradient(to top, transparent, black),
            linear-gradient(to left, transparent 17px, black 17px);
        -webkit-mask-size: 100% 20000px;
        -webkit-mask-position: left bottom;
        transition: mask-position 0.3s, -webkit-mask-position 0.3s;
    }

    main:hover {
        -webkit-mask-position: left top;
        cursor: pointer;
    }

`;