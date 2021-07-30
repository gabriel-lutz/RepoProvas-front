import styled from "styled-components"
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
        <Wrapper>
            <ProfessorButton>Walter White</ProfessorButton>
        </Wrapper>
        
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content:center;
    margin-top: 100px;
    
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