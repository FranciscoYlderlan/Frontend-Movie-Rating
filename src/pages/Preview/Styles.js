import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    
    grid-template-rows: 120px auto;
    grid-template-areas: "header"
                        "content";
    > main {
        grid-area: content;
        padding: 0 123px;
        overflow-y: auto;
        .title {
            display: flex;
            gap: 20px;
            align-items: baseline;
        }
        .desc {
            display: flex;
            gap: 12px;
            img{
                height: 16px;
                border-radius: 50%;

            }

            span {
                display: flex;
                align-items: baseline;
                gap: 8px;
            }
        }
    }
`;