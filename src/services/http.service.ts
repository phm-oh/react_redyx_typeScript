import axios ,{ AxiosResponse  , AxiosError} from "axios";

const http = axios.create({
    headers:{
        'Content-Type':'applicatoion/json' 
    }
});


export { http }  ;

export type { AxiosResponse ,AxiosError}