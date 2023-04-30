import styled, {keyframes} from "styled-components";

import movie from '../../assets/movie.svg';

const running = keyframes`
    0% { background-position: 0 0;}
    100% {background-position: 100% 0;}
`;

const flicker = keyframes`
  0%,
  100% { opacity: 1; }
  31.98% { opacity: 1; }
  32% { opacity: 0; }
  32.8% { opacity: 0; }
  32.82% { opacity: 1; }
  34.98% { opacity: 1; }
  35% { opacity: 0; }
  35.7% { opacity: 0; }
  35.72% { opacity: 1; }
  36.98% { opacity: 1; }
  37% { opacity: 0; }
  37.6% { opacity: 0; }
  37.62% { opacity: 1; }
  67.98% { opacity: 1; }
  68% { opacity: 0; }
  68.4% { opacity: 0; }
  68.42% { opacity: 1; }
  95.98% { opacity: 1; }
  96% { opacity: 0; }
  96.7% { opacity: 0; }
  96.72% { opacity: 1; }
  98.98% { opacity: 1; }
  99% { opacity: 0; }
  99.6% { opacity: 0; }
  99.62% { opacity: 1; }
`;

export const Container = styled.div`

    position:absolute;

    height: 100vh;
    width: 100vw;

    z-index: 999;

    display: grid;

    place-items: center;
    
    background-color: ${({theme}) => theme.COLORS.SHADOW};

`;

export const Background = styled.div`
    height: 230px;
    width: 450px;
    
    display: grid;

    place-items: center;

    background-image: url(${movie});

    background-size: 80%;

    background-position: 0px 0px;
    background-repeat: repeat-x;

    animation: ${running} 3s linear infinite, ${flicker} 3s linear infinite;

`;

export const Title = styled.span`
    display: flex;
    align-items: baseline;

    align-self: self-start;
    margin-top: 10px;

    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 63px;
    color: ${({theme}) => theme.COLORS.PINK};
    span > span {
        background-color: ${({theme}) => theme.COLORS.PINK}; ;
    }
    margin-bottom: 70px;
`;


