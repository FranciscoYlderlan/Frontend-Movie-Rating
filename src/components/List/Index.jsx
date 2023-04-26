import { Container } from "./styles.js";

export function List ({children, axios}) {
    return (
        <Container>
            {children}
        </Container>
    );
}