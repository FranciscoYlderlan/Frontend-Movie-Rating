import styled  from 'styled-components'

export const Container = styled.div`
    display: grid;

`;


export const Head = styled.div`
    display: flex;
    height: fit-content;
    padding: 62px 123px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
 
`;

export const Avatar = styled.div`
    display: flex;
    position: relative;
    height: fit-content;
    left: 0; 
    right: 0; 
    margin: -84px auto;
    > img {
        height: 186px;
        border-radius: 50%;
        
    };
    > label {
        position: absolute;
        bottom: 7px;
        right: 7px;
        display: flex;
        padding: 14px;
        border-radius: 50%;
        background-color: ${({theme}) => theme.COLORS.PINK};
        cursor: pointer;
        > input {
            display: none;
        }
        > svg {
            color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        }
    }
`;

export const Form = styled.form`
    width: 340px;
    display: grid;
    gap: 8px;
    margin: 168px auto 0;
    justify-self: center;
    div:nth-child(3) {
        margin-top: 16px;
    }
    > Button{
        margin-top: 16px;
    }
`;