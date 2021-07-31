import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { formSchema } from "../schemas"
import { useHistory } from "react-router-dom"

export default function Send(){
    const [formData, setFormData] = useState()
    const [coursesList, setCoursesList] = useState("")
    const [professorsList, setProfessorsList] = useState("")
    const [categoriesList, setCategoriesList] = useState("")
    const history = useHistory()

    useEffect(()=>{

        const coursesResponse = axios.get(`${process.env.REACT_APP_API_BASE_URL}/courses`)
        const categoriesResponse = axios.get(`${process.env.REACT_APP_API_BASE_URL}/categories`)
        coursesResponse.then(data=>{
            setCoursesList(data.data)
            const course = data.data.filter(c=> Number(c.id) === Number(data.data[0].id))
            setProfessorsList(course[0].professors)
            setFormData({categoryId: 1,  courseId: data.data[0].id, professorId: course[0].professors[0].id})
        })
        categoriesResponse.then(data=>{
            setCategoriesList(data.data)
        })
    },[])

    function handleSelect(e){
        setFormData({...formData, courseId: Number(e.target.value)})
        const course = coursesList.filter(c=> Number(c.id) === Number(e.target.value))
        setProfessorsList(course[0].professors)
    }

    function sendExam(e){
        e.preventDefault()
        console.log(formData)
        if(formSchema.validate(formData).error){
            console.log(formSchema.validate(formData).error)
            return alert("Você precisa dar um nome e colocar um link de pdf válido!")
        }
        const response = axios.post(`${process.env.REACT_APP_API_BASE_URL}/exams`, formData)
        response.then(()=>{
            alert("Ok")
        })
        response.catch("deu ruim")
    }
    console.log(formData)
    return(
        <>
            <Form onSubmit={sendExam}>
                <H1>Primeiro de um nome ao seu arquivo:</H1>
                <Input 
                    type="text" 
                    placeholder="Ex.: teste algoritmos 1" 
                    onChange={e=>setFormData({...formData, name: e.target.value})}>
                </Input>

                <H1>Agora coloque o link para o seu pdf:</H1>
                <Input 
                    type="text" 
                    placeholder="http://www..." 
                    onChange={e=>setFormData({...formData, pdfLink: e.target.value})}>
                </Input>
                <H1>Selecione a disciplina na qual a prova foi aplicada:</H1>
                <Select name="disciplina" id="disciplina" onClick={handleSelect}>
                    {coursesList !== "" && coursesList.map(c => {
                        return (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        )
                    })}
                    
                </Select>

                <H1>Selecione o professor que aplicou a prova</H1>
                <Select 
                    name="pofessor" 
                    id="professor" 
                    onClick={e=>setFormData({...formData, professorId: Number(e.target.value)})}>
                    {professorsList !== "" && professorsList.map(p => {
                        return (
                            <option key={p.id} value={p.id}>{p.name}</option>
                        )
                    })}
                </Select>

                <H1>Por último selecione a categoria da prova aplicada:</H1>
                <Select 
                    name="categoria" 
                    id="categoria" 
                    onClick={e=>setFormData({...formData, categoryId: Number(e.target.value)})}>
                    {categoriesList !== "" && categoriesList.map(c => {
                        return (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        )
                    })}
                </Select>

                <SendButton type="submit">
                    Enviar Prova!
                </SendButton>
                <CancelButton onClick={()=> history.push("/")}>
                    Cancelar
                </CancelButton>
            </Form>
        </>
    )
}

const Form = styled.form`
    margin: 100px auto 0 auto;
    display:flex;
    flex-direction:column;
    width:400px;
    color:white;
    
`
const H1 = styled.h1`
    margin-top: 20px;
    margin-bottom:5px;
`
const Input = styled.input`
    width:auto;
    padding:5px 10px;
    background:none;
    color:white;
    border-bottom: 1px solid #00ADB5    ;
`

const Select = styled.select`
    width:auto;
    color:white;
    background:none;
    padding:5px 10px;
    border: none;
    outline:none;
    border-bottom: 1px solid #00ADB5;

    & option {
        background:#222831;
    }
`

const SendButton = styled.button`
background-color: #393E46;
color:white;
    margin: 20px auto;
    width: 150px;
    height: 50px;
    border-radius: 10px;
    transition: 0.2s;

    &:hover{
        box-shadow: 0 0 5px white;
        
}
`

const CancelButton = styled.button`
    background-color: #222831;
    color:white;
    margin: 0 auto 50px auto;
    width: 150px;
    height: 50px;
`