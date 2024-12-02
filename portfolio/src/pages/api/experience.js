import axios from "axios";
const STRAPI_URL = process.env.STRAPI_API_URL
export default async function handler(request, respose){
    try{
        const experiences = await axios.get(STRAPI_URL + "experiences?populate=companyLogo")
        respose.status(200).json(experiences.data)
    } catch{
        respose.status(400).json({error: err})
    }
}