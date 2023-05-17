import axios ,{ AxiosResponse } from "axios";

const http = axios.create({
    headers:{
        'Content-Type':'applicatoion/json' 
    }
});


export { http }  ;

export type { AxiosResponse }