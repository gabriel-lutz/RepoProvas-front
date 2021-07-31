import { useState,useEffect } from "react"
import { useParams } from "react-router"
import styled from "styled-components"
import axios from "axios"
import CategoryCard from "./CategoryCard"

export default function Professor(){
    const [categoriesList, setCategoriesList] = useState()
    const { id } = useParams()

    useEffect(()=>{
        const response = axios.get(`${process.env.REACT_APP_API_BASE_URL}/exams/professors/${id}`)
        response.then(data=>{
            console.log(data.data)
            setCategoriesList(data.data)
        })
    },[id])

    return(
        <>
            <Wrapper>
                {categoriesList && categoriesList.length
                    ? categoriesList.map(c=>(
                        <CategoryCard key={c.id} category={c}/>
                    ))
                    : "Nenhuma prova cadastrada para esse professor!"
                }
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    width:350px;
    flex-direction: column;
    justify-content:center;
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