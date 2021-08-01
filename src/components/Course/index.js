import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function Courses(){
    const [periodsList, setPeriodsList] = useState()
    const {id} = useParams()
    useEffect(()=>{
        const response = axios.get(`${process.env.REACT_APP_API_BASE_URL}/exams/courses/${id}`)
        response.then(data=>{
            setPeriodsList(data.data)
        })
    },[id])
    
    return(
        <Wrapper>
            {periodsList &&
                periodsList.map(p=>(
                    <>
                        <H1>{p.name}</H1>
                        {p.exams.map(e=>(
                            <a href={e.pdfLink}>
                                {e.name} - {e.professor.name}
                            </a>
                        ))}
                    </>
                ))
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width:350px;
    justify-content:center;
    flex-direction:column;
    margin: 100px auto 100px auto;
    
    a{
    display:flex;
    align-items:center;
    height:30px;
    padding-left: 10px;
    width:100%;
    text-align:left;
    margin:5px 0;
    transition: 0.2s;
    background-color: #222831;
    color:white;
    &:hover{
        border-left: 2px solid #00ADB5;
    }
`

const H1 = styled.h1`
    text-align: center;
    color:white;
    font-size: 30px;
    margin: 20px 0 10px 0;
`