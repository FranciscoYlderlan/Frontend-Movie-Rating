import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    
    grid-template-rows: fit-content auto;
    grid-template-areas: "header"
                        "content";
    > main {
        grid-area: content;
        margin: 0 123px;
        max-height: 70vh;
        overflow-y: scroll;

        .title {
            display: flex;
            gap: 20px;
            align-items: baseline;
            margin: 24px 0;
            > h2 {
                font-style: normal;
                font-weight: 500;
                font-size: 36px;
                line-height: 47px;
            }
        }
        .status {
            display: flex;
            gap: 12px;
            color: ${({theme})=> theme.COLORS.WHITE};
            img{
                height: 16px;
                border-radius: 50%;
                width: 16px;
                object-fit: cover;
            }

            > span {
                display: flex;
                align-items: center;
                gap: 8px;

                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
            }
            > span + span {
                .clock {
                    color: ${({theme}) => theme.COLORS.PINK};
                }
            }
        }
        ul {
            margin: 40px 0;
        }
        .desc {
            text-align: justify;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 21px;
        }
    }
`;