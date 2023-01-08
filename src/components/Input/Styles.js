import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    
    align-items: center;
    padding: 20px;
    gap: 5px;
    border-radius: 10px;
    border: 1px red solid;
    > input {
        border: none;
    } 
`;