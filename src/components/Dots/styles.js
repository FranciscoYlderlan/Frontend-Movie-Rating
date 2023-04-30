import styled, {keyframes} from "styled-components";

const jumping = keyframes`

  0% {
    top: 50px;
    
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }

  40% {
    height: 20px;
    border-radius: 50%;
    transform: scaleX(1);
  }

  100% {
    top: 30%;
  }

`;

export const Dot = styled.span`

  width: 10px;
  height: 10px;

  position: absolute;
  border-radius: 50%;
  
  left: 15%;
  transform-origin: 50%;
  animation: ${jumping}.7s alternate infinite ease;

`;

export const Container = styled.span`

    width: 70px;
    height: 60px;
    position: relative;
    
    ${Dot}:nth-child(2) {
        left: 45%;
        animation-delay: .2s;
    }
    ${Dot}:nth-child(3) {
        left: auto;
        right: 15%;
        animation-delay: .3s;
    }
`;

