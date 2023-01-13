import { Container } from "./Styles.js";

export function TextLink ({title, icon: Icon, ...rest}) {
    return (
        <Container {...rest}>
            {Icon && <Icon size={20}/>}
            {title}
        </Container>
    );
}