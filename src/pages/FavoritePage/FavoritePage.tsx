import { CarList } from "../../components/CarList/CarList";
import { useFavorites } from "../../hooks/useFavorites";






export const FavoritePage = () =>{
    const {favorites, toggleFavorite} = useFavorites();

    return(
        <CarList cars={favorites} toggleFavorite={toggleFavorite}/>
    )
}