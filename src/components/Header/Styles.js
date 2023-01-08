import styled from 'styled-components'

export const Container = styled.div`
    grid-area: header;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 64px;
    padding: 0 123px;
    
    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_800 } ;

    > h2 {
        color: ${({theme}) =>  theme.COLORS.PINK};
    }

    > div {
        display: flex;
        gap: 10px;
        align-items: center;
        div {
            display: grid;
            justify-items: end;
            height: fit-content;
            span {
                white-space: pre;
                color: ${({theme}) =>  theme.COLORS.GRAY_300};
             }
             a {
                color: ${({theme}) =>  theme.COLORS.GRAY_100};
             }
        }

        img {
            height: 64px;
            border-radius: 50%;
        }

    }
`;