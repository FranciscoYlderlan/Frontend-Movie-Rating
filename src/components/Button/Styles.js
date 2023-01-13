import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.PINK};
    border: none;
    border-radius: 8px;
    padding: 16px 0;
    color: ${({theme}) => theme.COLORS.DARK_GRAY};

    
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;

    &:disabled {
        cursor:default;
        filter: brightness(.5);
    }
`;