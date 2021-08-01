import { useHistory } from "react-router-dom"
import styled from "styled-components"

export default function Header(){
    const history = useHistory()
    return(
        <>
            <Title onClick={()=>{history.push("/")}}>REPOPROVAS</Title>
        </>
    )
}

const Title = styled.h1`
    font-size: 48px;
    color:#00ADB5;
    font-family: 'Palette Mosaic', cursive;
    text-align: center;
    padding: 25px;
    background: ;    
`