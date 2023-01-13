import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    margin: 16px;
    padding: 16px;
    
    border-radius: 10px;
    height: fit-content;
    width: fit-content;


    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_1000};
    color: ${({theme}) => theme.COLORS.WHITE};
    border: ${({theme, isNew}) => isNew ? `4px dashed ${theme.COLORS.BACKGROUND_1000}` : "4px solid transparent"};

    > button {
        border: none;
        background: none;
        > svg {
            color: ${({theme})=> theme.COLORS.PINK}
        }
    }
    > input {
        color: ${({theme}) => theme.COLORS.WHITE};
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        background-color: transparent;
        border: none;
        &::placeholder {
            color:  ${({theme}) => theme.COLORS.GRAY_100};
        }
    }

`;