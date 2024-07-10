import { useState } from "react";
import { Car } from "../types/types";



export const useFavorites = ()=>{
    const setLocal = (car:Car) =>localStorage.setItem('favorite', JSON.stringify(car));
      
   const getLocal = ()=> {
        const data = localStorage.getItem('favorite');
       return data !== null ? JSON.parse(data): []
    }
    
    const [favorites, setFavorites] = useState(()=>getLocal())


const addToLocal = (car:Car): void=>{
    const savedFavorites = getLocal();
    savedFavorites.push(car)
    setFavorites(savedFavorites)
    setLocal(savedFavorites);
}

const remove = (car:Car)=>{
    const savedFavorites = getLocal();
    const filter = savedFavorites.filter((item:Car)=> item.id !==car.id);
    setFavorites(filter)
    setLocal(filter);
}

const toggleFavorite = (car:Car) => {
    const savedFavorites = getLocal();
   
   const isFavorites = !!savedFavorites.find((item:Car)=>item.id===car.id);
    if(isFavorites){
        remove(car)
    }else{
        addToLocal(car)
    }

    
}

return {toggleFavorite, favorites, remove, addToLocal, setLocal, getLocal};

}