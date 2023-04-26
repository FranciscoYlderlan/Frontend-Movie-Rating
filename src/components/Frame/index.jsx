import { StarRating } from "../StarRating";
import { List } from "../List";
import { Tag } from "../Tag";
import { Container } from "./styles";
export function Frame({note,...rest}){
    return (
        <Container {...rest}>
            <h3>{note.title}</h3>
            <StarRating resize={15} numStars={note.rating}/>
            <p>{note.description}</p>
            
            <List className="tags">
                {
                    note.tags && note.tags.map((tag, index) => {
                        return (
                            <li key={String(index)}>
                                <Tag title= {tag.name}/>
                            </li>             
                        )
                    })
                }
            </List>
        </Container>
    );
};