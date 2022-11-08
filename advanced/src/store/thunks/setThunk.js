import { createAsyncThunk } from '@reduxjs/toolkit';
import formattError from "./errorFormatter";

const fetchSets = createAsyncThunk(
    'card/fetchSets',
    async () => {
        const url = "https://api.pokemontcg.io/v2/sets";
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
       const response = fetch(url, requestOptions);
       if(response.status === 200){
        return (await response).json();
       };
       throw formattError(response, "fetchSets");
    }
)

export {
    fetchSets
}