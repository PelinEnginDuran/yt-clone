import axios  from "axios";

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com"

const options = {
    method: 'GET',
    url: 'https://yt-api.p.rapidapi.com/home',
    headers: {
      'X-RapidAPI-Key': '78d7909bd1msh9c59cb67b90942cp1c229djsna02622d49002',
      'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
  };

export const getData = async (path)=>{
    try{
        const response = await axios.get(path, options)

        return response.data
    } catch (err){
        console.log(err)
    }

   
}


