import { Container } from "./Styles.js";

export function TextLink ({title, ...rest}) {
    return (
        <Container type="button" {...rest}>
            {title}
        </Container>
    );
}