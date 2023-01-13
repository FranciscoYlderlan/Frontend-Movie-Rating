import { StarRating } from "../StarRating";
import { List } from "../List";
import { Tag } from "../Tag";
import { Container } from "./Styles";
export function Frame({...rest}){
    return (
        <Container {...rest}>
            <h3>Interestellar</h3>
                <StarRating resize={15}/>
            <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se </p>
            <List className="tags">
                <li><Tag title="Ficção Científica"/></li>
                <li><Tag title="Drama"/></li>
                <li><Tag title="Família"/></li>
            </List>
        </Container>
    );
};