import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    
    align-items: center;
    padding: 20px;
    gap: 5px;
    border-radius: 10px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};

    color: ${({theme}) => theme.COLORS.GRAY_100};
    
    > input {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};
        border: none;
        width: 100%;

        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
    } 
    > svg {
        fill: ${({theme}) => theme.COLORS.GRAY_100};
    }
`;