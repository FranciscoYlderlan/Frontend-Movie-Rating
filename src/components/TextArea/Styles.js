import styled from "styled-components"

export const Container = styled.textarea`
    height: 278px;
    width: 100%;
    outline: none;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    border: none;
    border-radius: 10px;
    padding: 20px;
`;