import { Container } from "./Styles.js";

export function List ({children, axios}) {
    return (
        <Container>
            {children}
        </Container>
    );
}