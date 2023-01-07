import { Container } from "./Styles.js";

export function TextLink ({name, ...rest}) {
    return (
        <Container type="button" {...rest}>
            {name}
        </Container>
    );
}