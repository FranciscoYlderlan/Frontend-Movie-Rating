import { BiArrowBack} from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";

import { Header } from "../../components/Header";
import { TextLink } from "../../components/TextLink";
import {StarRating} from "../../components/StarRating"
import { Container } from "./Styles.js";


export function Preview () {
    return (
        <Container>
            <Header/>
            <main>
                <TextLink title="Voltar" icon={BiArrowBack}/>
                <div className="title">
                    <h1>Interestelar</h1>
                    <StarRating/>
                </div>
                <div className="desc">
                    <span>
                        <img src="https://github.com/FranciscoYlderlan.png" alt="Foto do usuário" />
                        Por Francisco Ylderlan
                    </span>
                    <span>
                      <AiOutlineClockCircle size={18}/>23/05/22 às 08:00
                    </span>
                </div>
            </main>

            

        </Container>
    );
}