import { fetchExperenceList } from "../../lib/strapi";

export async function getStaticProps(){
    const experinceList = await fetchExperenceList();
    return {
        props: {experinceList}
    };
}

export default function experences({ experinceList }) {


    console.dir(experinceList)
    return (
        <>
            <div>
                <h1>test</h1>
                <ul>
                    {experinceList.data.map((exp, index) => (
                        <li key={index}>
                            <h1>{exp.role}</h1>
                            <h3>{exp.company}</h3>
                            <h3>Years: {exp.duration}</h3>
                            <h3>Details: {exp.description}</h3>
                            <h3>Working here? {exp.isCurrentlyEmployed ? "Yes" : "No"}</h3>
                            {exp.companyLogo ? (
                                <img src={"http://localhost:1337" + exp.companyLogo[0]?.formats?.thumbnail.url } />
                            ) : null}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
