import styled from 'styled-components'
import { Link } from 'react-router-dom';
export const Container = styled(Link)`
    display: flex;
    gap: 8px;
    background-color: transparent;
    border: none;
    align-items: center;
    color: ${({theme}) => theme.COLORS.PINK};

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

`;