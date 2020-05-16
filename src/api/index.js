import Axios from "axios";
const url = 'https://covid19.mathdro.id/api';


export const fetchData = async (country) => {

    let changableURL = url;

    if(country){
        changableURL = `${url}/countries/${country}`
    }

    try{
        const {data: {confirmed, countries, recovered, deaths, lastUpdate}} = await Axios.get(changableURL);

        return {confirmed, countries, recovered, deaths, lastUpdate}
    }
    catch(error){
        // console.log(error);
    }
}

export const fetchDailyData = async () => {
    try{
        const {data} = await Axios.get(`${url}/daily`);
        const dailyDataFetch = data.map((data) => ({
            confirmed : data.confirmed.total,
            deaths: data.deaths.total,
            date: data.reportDate
        }))
        return dailyDataFetch
    }
    catch(error){
        console.log(error);
    }
}

export const countries = async () => {
    try{
        const {data: {countries}} = await Axios.get(`${url}/countries`);
        
        return countries.map((country) => country.name);
    }
    catch(error){
        console.log(error);
    }
}