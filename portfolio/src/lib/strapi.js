import axios from 'axios'


const STRAPI_URL = process.env.STRAPI_API_URL
//const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN

export const fetchExperenceList = async () =>{
    try {
        // const respose = await axios.get(STRAPI_URL + "experiences?populate=companyLogo")
        const respose = await axios.get("http://localhost:3000/api/experience")
        return respose.data
    } catch (error){
        console.error("Error in fetching list" + error)
    }
    
}