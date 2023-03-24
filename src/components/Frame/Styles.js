import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    background-color: ${({theme})=> theme.COLORS.PINK_ALFA};
    border: none;
    border-radius: 16px;
    padding: 32px;
    gap: 8px;
    transition: all .1s ;
    filter: brightness(1.3);
    > h3 {
        color: ${({theme})=> theme.COLORS.WHITE};
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
    };
    > p {
        margin: 16px 0;
        
        color: ${({theme}) => theme.COLORS.GRAY_200};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
    };
    &:hover{
        cursor: pointer;
        filter: brightness(1);
    }
`;