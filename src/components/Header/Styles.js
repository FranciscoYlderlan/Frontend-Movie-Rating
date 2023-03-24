import styled from 'styled-components';


export const Container = styled.div`
    grid-area: header;
    height: fit-content;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 64px;
    padding: 30px 123px;
    margin-bottom: 40px;
    
    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_800 } ;
    
`;

export const Logo = styled.div`
    color: ${({theme}) =>  theme.COLORS.PINK};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    &:hover{
        cursor: pointer;
    }

`;

export const Account = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    > div {
        display: grid;
        justify-items: end;
        height: fit-content;
        font-style: normal;
        font-size: 14px;
        line-height: 18px;

        > span {
            white-space: pre;
            color: ${({theme}) =>  theme.COLORS.GRAY_300};
            font-weight: 700;
        }
        a {
            color: ${({theme}) =>  theme.COLORS.GRAY_100};
            font-weight: 400;
        }
        > span:hover {
            cursor: pointer;
        }
    }
    > img {
            height: 64px;
            border-radius: 50%;
            width: 64px;
            object-fit: cover;
    }
    > img:hover {
        cursor: pointer;
    }
`;