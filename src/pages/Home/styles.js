import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    
    grid-template-rows: fit-content auto;
    grid-template-areas: "header"
                         "title"
                         "content";

    > main {
        display: grid;
        grid-area: content;
        max-height: 60vh;
        gap: 24px;
        overflow-y: scroll;
        
        margin: 0 123px;

    }
`;
export const Title = styled.div`
        grid-area: title;
        display: flex;
        justify-content: space-between;
        margin: 0px 123px 40px;
        gap: 60%;
        > h2 {
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            line-height: 42px;
            width: 100%;
        }

`;