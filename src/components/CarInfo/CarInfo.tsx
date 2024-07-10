
import {FC} from "react"
import { Car } from "../../types/types"
import { Btn, CarDescrp, CarDescrp1, CarImg, CarName, Conditions, DescrpItem, Item, ItemList, Model, Svg, Text, Wrapper } from "./CarInfo.styled"


interface CarInfoProps {
    car: Car,
    onClose: ()=>void
}

export const CarInfo: FC<CarInfoProps> = ({car, onClose})=>{

    return(
        <Wrapper>
            <ul>
    <CarImg width='461' height="248" src={car.img} alt={car.model} />
<div>
<CarName> {car.make} <Model>{car.model}</Model>, {car.year}</CarName>
</div>
<CarDescrp>
    <DescrpItem>{car.address.split(",")[1]}</DescrpItem>
    <DescrpItem>{car.address.split(",")[2]}</DescrpItem>
    <DescrpItem>Id: {car.id}</DescrpItem>
    <DescrpItem>Year: {car.year}</DescrpItem>
    <DescrpItem>Type: {car.type}</DescrpItem>
    <DescrpItem>Fuel Consumption: {car.fuelConsumption}</DescrpItem>
    <DescrpItem>Engine Size: {car.engineSize}</DescrpItem>
</CarDescrp>

<Text>{car.description}</Text>
<Conditions>Accessories and functionalities:</Conditions>
<CarDescrp1>
    <DescrpItem>{car.accessories[0]}</DescrpItem>
    <DescrpItem>{car.accessories[1]}</DescrpItem>
    <DescrpItem>{car.accessories[2]}</DescrpItem>
    <DescrpItem>{car.functionalities[0]}</DescrpItem>
    <DescrpItem>{car.functionalities[1]}</DescrpItem>
    <DescrpItem>{car.functionalities[2]}</DescrpItem>
</CarDescrp1>
<Conditions>Rental Conditions:</Conditions>
<ItemList>
    <Item>{car.rentalConditions.split('\n')[0]} </Item>
    <Item>{car.rentalConditions.split('\n')[1]}</Item>
    <Item>{car.rentalConditions.split('\n')[2]}</Item>
    <Item>Mileage: {car.mileage}</Item>
    <Item>Price: {car.rentalPrice}</Item>
</ItemList>
<Svg onClick={onClose} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18" stroke="#121417" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 6L18 18" stroke="#121417" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
</ul>
<Btn href="tel:+380730000000" >Rental car</Btn>
        </Wrapper>
    )
}