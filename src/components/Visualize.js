import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Visualize(){
    return(
        <>
        <Wrapper>
            <Link to={"/visualize/professors"}>
                <Button>Quero ver uma prova por Professor!</Button>
            </Link>
            <Link to={"/visualize/courses"}>
                <Button>Quero ver uma prova por Disciplina! </Button>
            </Link>
        </Wrapper>
        
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content:center;
    margin-top: 100px;
    
`

const Button = styled.button`
background-color: #393E46;
color:white;
    margin: 0 20px;
    width: 200px;
    height: 100px;
    border-radius: 10px;
    transition: 0.2s;

    &:hover{
        box-shadow: 0 0 5px white;
        
}
`