import { Link } from "react-router-dom"
import { Wrapper, Button } from "../../styles/sortedStyles"

export default function Menu(){
    return(
        <Wrapper>
            <Link to={"/send"}>
                <Button>Quero enviar uma prova!</Button>
            </Link>
            <Link to={"/visualize"}>
                <Button>Quero visualizar uma prova!</Button>
            </Link>
        </Wrapper>
    )
}