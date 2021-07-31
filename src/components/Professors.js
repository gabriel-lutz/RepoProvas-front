import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export default function Visualize(){
    const [professorsList, setProfessorsList] = useState()
    const history = useHistory()

    useEffect(()=>{
        const response = axios.get(`${process.env.REACT_APP_API_BASE_URL}/exams/professors`)
        response.then(data=>{
            setProfessorsList(data.data)
        })
    },[])

    return(
        <>
        <Wrapper>
            {professorsList && 
                professorsList.map(p=> (
                    <ProfessorButton key={p.id} onClick={()=>history.push(`/visualize/professors/${p.id}`)}>
                        {p.name} <br></br>
                        {p.exams.length
                            ? (p.exams.length === 1 ? "1 Prova": p.exams.length + " Provas") 
                            : "Nenhuma prova" }            
                    </ProfessorButton>
                ))}

        </Wrapper>
        
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    width:400px;
    flex-direction: column;
    justify-content:center;
    margin: 100px auto 0 auto;
    
`

const ProfessorButton = styled.button`
    padding: 5px 10px;
    text-align:left;
    margin:5px 0;
    transition: 0.2s;
    background-color: #222831;
    color:white;
    &:hover{
        border-left: 2px solid #00ADB5;
`