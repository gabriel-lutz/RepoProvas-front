import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Choices(){
    return(
        <>
        <Title>REPOPROVAS</Title>
        <Wrapper>
            <Link to={"/send"}>
                <Button>Quero enviar uma prova!</Button>
            </Link>
            <Link to={"/visualize"}>
                <Button>Quero visualizar uma prova!</Button>
            </Link>
        </Wrapper>
        
        </>
    )
}

const Title = styled.h1`
    font-size: 48px;
    color:#00ADB5;
    font-family: 'Palette Mosaic', cursive;
    text-align: center;
    margin-top: 50px;
`

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