import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"

export default function Visualize(){
    useEffect(()=>{
        const response = axios.get("http://localhost:4000/test")
        response.then(data=>{
            console.log(data.data)
        })
    },[])

    return(
        <>
        <Title>REPOPROVAS</Title>
        <Wrapper>
            <ProfessorButton>Walter White</ProfessorButton>
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
    

    
        
}
`

const ProfessorButton = styled.button`
    padding: 10px 30px;
    border-radius: 10px;
    transition: 0.2s;
    background-color: #393E46;
    color:white;
    &:hover{
        box-shadow: 0 0 5px white;
`