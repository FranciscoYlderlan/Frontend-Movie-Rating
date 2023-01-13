import styled from "styled-components"

export const Container = styled.div`
    grid-template-rows: fit-content;
    grid-template-areas: "header"
                         "title"
                         "content";
    > main {
        grid-area: content;
        max-height: 60vh;
        overflow-y: scroll;
        margin: 0px 123px;
        > form {
            display: grid;
            gap: 40px;
            .col-2 {
                display: flex;
                gap: 40px;
                > Button:first-child {
                    background-color: ${({theme}) => theme.COLORS.BLACK};
                    color: ${({theme}) => theme.COLORS.PINK};
                }
            }
        };
    };
    
`;

export const Title = styled.div`
        grid-area: title;
        display: grid;
        margin: 0px 123px 40px;
        gap: 24px;
        > h2 {
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            line-height: 42px;
            width: 100%;
        };

`;

export const MarkArea = styled.div`
        display: flex;
        gap: 8px;
        background-color: ${({theme}) => theme.COLORS.BLACK};
        border: none;
        border-radius: 16px;
        height: fit-content;
        width: 100%;
`;