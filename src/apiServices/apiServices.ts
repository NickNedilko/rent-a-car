import  axios  from "axios";
import { Car } from "../types/types";



export const getCars = async (page: number): Promise<Car[]>  => {
    const cars : Car[] = await axios.get(`https://6504a918c8869921ae254f39.mockapi.io/Cars`, {
        params: {
            page,
            limit: 8,
        }
    });
    return cars;
}

