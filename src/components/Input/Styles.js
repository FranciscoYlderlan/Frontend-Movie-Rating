import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    
    align-items: center;
    padding: 20px;
    gap: 5px;
    border-radius: 10px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    color: ${({theme}) => theme.COLORS.GRAY_100};
    
    > input {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        border: none;
        width: 100%;
    } 
    > svg {
        fill: ${({theme}) => theme.COLORS.GRAY_100};
    }
`;