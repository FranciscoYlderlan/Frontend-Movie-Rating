import { BiArrowBack} from "react-icons/bi";
import { Header } from "../../components/Header";
import { TextLink } from "../../components/TextLink";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Markup } from "../../components/Markup";
import { Container, Title, MarkArea } from "./Styles";
import { useState } from "react";

export function Create() {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState([]);

    return (
        <Container>
            <Header/>
            <Title>
                <TextLink to="/" title="Voltar" icon={BiArrowBack}/>
                <h2>Novo filme</h2>
            </Title>
            <main>
                <form action="">
                    <div className="col-2">
                        <Input 
                            placeholder="Titulo"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input 
                            placeholder="Sua nota (de 0 a 5)"
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>
                    <TextArea 
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />
                    <h3>Marcadores</h3>
                    <MarkArea>
                        <Markup value="Ficção Científica"/>
                        <Markup isNew placeholder="Novo marcador"/>
                    </MarkArea>
                    <div className="col-2">
                        <Button title="Excluir filme"/>
                        <Button to="/" title="Salvar alterações"/>
                    </div>
                </form>
            </main>
        </Container>
    );
};