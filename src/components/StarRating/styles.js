import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    gap: 10px;
    > button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        color: ${({theme}) => theme.COLORS.PINK};
        > AiFillStar {
            fill: ${({theme}) => theme.COLORS.PINK};
        }
        
    }
    
`;