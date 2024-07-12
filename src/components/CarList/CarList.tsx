
import { ListCars} from "./CarList.styled";
import {FC} from "react";
import { Car } from "../../types/types";
import { Card } from "../Card/Card";


interface CarListProps {
  cars: Car[],
  toggleFavorite: (item:Car)=> void
}

export const CarList: FC<CarListProps> = ({cars, toggleFavorite}) => {
    return(
      <>
        <ListCars>
      {cars?.map(car=> {
       return <Card car={car} key={car.id} toggleFavorite={toggleFavorite}/>
      })}
      </ListCars>
      </>
       
    )
}