import { Container, Background, Title } from './styles';
import { Dots } from '../Dots';
export function Loading() {
    return(
        <Container>
            <Background>
                <Title>
                    Carregando<Dots/>
                </Title>                
            </Background>

        </Container>
    );
}