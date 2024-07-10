
import { ListCars} from "./CarList.styled";
import {FC} from "react";
import { Car } from "../../types/types";
import { Card } from "../Card/Card";
import { SearchBar } from "../SearchBar/SearchBar";

interface CarListProps {
  cars: Car[],
  toggleFavorite: (item:Car)=> void
}

export const CarList: FC<CarListProps> = ({cars, toggleFavorite}) => {
    return(
      <>
    <SearchBar/>
        <ListCars>
      {cars?.map(car=> {
       return <Card car={car} key={car.id} toggleFavorite={toggleFavorite}/>
      })}
      </ListCars>
      </>
       
    )
}