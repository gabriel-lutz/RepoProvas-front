import styled from "styled-components"
export default function CategoryCard({category}){
    
    return(
        <>
            <H1>{category.name}</H1>
            {category.exams.map(e=>(
                <a key={e.id} href={e.pdfLink}>
                    {e.name} - {e.course.name}                            
                </a>
            ))}
        </>

    )
}

const H1 = styled.h1`
    text-align: center;
    color:white;
    font-size: 30px;
    margin: 20px 0 10px 0;
`