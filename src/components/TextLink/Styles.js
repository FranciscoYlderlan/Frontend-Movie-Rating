import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    gap: 8px;
    background-color: transparent;
    border: none;
    align-items: center;
    color: ${({theme}) => theme.COLORS.PINK};

`;