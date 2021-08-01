import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import SelectCourse from "./SelectCourse"

export default function Courses(){
    const [periodsList, setPeriodsList] = useState()
    useEffect(()=>{
        const response = axios.get(`${process.env.REACT_APP_API_BASE_URL}/exams/periods`)
        response.then(data=>{
            setPeriodsList(data.data)
        })
    },[])
    
    return(
        <Wrapper>
            {periodsList &&
                periodsList.map(p=>(
                    <div key={p.id}>
                        <H1>{p.name}</H1>
                        <SelectCourse period={p}/>
                    </div>
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