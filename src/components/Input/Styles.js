import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    
    align-items: center;
    padding-left: 20px;
    gap: 16px;
    border-radius: 10px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};

    color: ${({theme}) => theme.COLORS.GRAY_100};
    
    
    > input {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};
        border: none;
        padding: 20px 0;
        padding-right: 20px;
        width: 100%;

        border-radius:10px;
        
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        
        outline: none;
    } 
    
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    > svg {
        fill: ${({theme}) => theme.COLORS.GRAY_100};
    }
`;