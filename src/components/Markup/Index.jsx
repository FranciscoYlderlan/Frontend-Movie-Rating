import { Container } from "./Styles";
import { FiPlus, FiX } from "react-icons/fi";
export function Markup({isNew, value ,onClick, ...rest}) {
    return (
        <Container isNew={isNew} >
            <input type="text" value={value} readOnly={!isNew} {...rest}/>
            <button type="button" onClick={onClick}>
                { isNew ? <FiPlus size={22}/> : <FiX size={22}/> }
            </button>
        </Container>
    );
};