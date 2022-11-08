import { createAsyncThunk } from '@reduxjs/toolkit';
import formattError from "./errorFormatter";

const fetchCards = createAsyncThunk(
    'card/fetchCards',
    async () => {
        const url = "https://api.pokemontcg.io/v2/cards";
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
       const response = fetch(url, requestOptions);
       if(response.status === 200){
        return (await response).json();
       };
       throw formattError(response, "fetchCards");
    }
)

export {
    fetchCards
}