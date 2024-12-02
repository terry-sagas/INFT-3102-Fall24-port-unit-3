import { useState } from "react";

export default function Projects(){
    let [project, setProject] = useState({
        name: "portfolio project",
        language: "nextjs"
    })
    return(
        <>
        <div>
            <h1>{project.name}</h1>
            <h1>{project.language}</h1>
        </div>
        </>
    )
}