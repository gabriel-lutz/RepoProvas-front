import { Link } from "react-router-dom"
import { Wrapper, Button } from "../../styles/sortedStyles"

export default function Visualize(){
    return(
        <Wrapper>
            <Link to={"/visualize/professors"}>
                <Button>Quero ver uma prova por Professor!</Button>
            </Link>
            <Link to={"/visualize/courses"}>
                <Button>Quero ver uma prova por Disciplina! </Button>
            </Link>
        </Wrapper>
    )
}