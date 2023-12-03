import { useState, useEffect } from "react";
import axios from "axios";
import {RAPID_API_KEY} from '@env';

const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query)=>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
          ...query
        },
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        } 
    };

    const fetchData = async () => {
        setIsLoading(true);
        
        try{
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
          //  console.log(response.data);
            
        } catch (error){
            setError(error);
            alert('There is an error')
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        //calls the fetch data function
        fetchData();
        return;
    }, []);

    //used in case the use effect does not work properly, so then it refetch the data
    const refetch = ()=>{
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch};
    
}

export default useFetch;