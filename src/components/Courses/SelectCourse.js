import { Link } from "react-router-dom"

export default function SelectCourse({period}){
    return(
        <>
            {period.courses.map(c=>(
                <Link to={`courses/${c.id}`}>{c.name} <br></br>
                    {c.exams.length? c.exams.length +" Provas cadastradas":"Nenhuma prova cadastrada"} 
                </Link>
            ))}
        </>
    )
}