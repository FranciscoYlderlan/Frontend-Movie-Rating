import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    border: none;
    border-radius: 8px;
    padding: 8px 16px;

    color: ${({theme}) => theme.COLORS.WHITE_100};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

`;