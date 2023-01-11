import styled from "styled-components";
import background_theater from "../../assets/background_theater.png"

export const Container = styled.div`
    display: flex;
    height: 100vh;
    > main {
        margin: auto 140px;
        h1 {
            font-style: normal;
            font-weight: 700;
            font-size: 48px;
            line-height: 63px;
            color: ${({theme}) => theme.COLORS.PINK};
        }
        p {
            margin-bottom: 24px;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
        }
        h2 {
            margin: 48px 0;

            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 32px;
        }
        form {
            display: grid;
            gap: 8px;
            margin: 24px 0;
        }
        .link{
            margin: 42px auto;
        }
    }
`;

export const Image = styled.div`
    flex: 1;
    background: url(${background_theater}) no-repeat center center;
    background-size: cover;
`;