import * as ReactDOM from 'react-dom';
import  { useState, FC } from "react";
import { Car } from '../../types/types';
import { CarCard, CarDescrp, DescrpItem, Img, Model, SvgIcon, Wrapper } from './Card.styled';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { CarInfo } from '../CarInfo/CarInfo';
import { useFavorites } from '../../hooks/useFavorites';

interface CardProps {
    car: Car,
    toggleFavorite: (car: Car)=>void
}

export const Card: FC<CardProps> = ({car, toggleFavorite}) =>{
const [isModal, setIsModal] = useState<boolean>(false);
const toggleModal = ()=>{
setIsModal(prevState => !prevState)}
    const { getLocal } = useFavorites();
    



return(
<>
<CarCard>
    <Img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdIIeYSZK0HDOoK_zkubYuaXMwB0NQx7JITQ&s"} alt={car.model} />
<Wrapper>
<p> {car.make} <Model>{car.model}</Model>, {car.year}</p>
<p>{car.rentalPrice}</p>
</Wrapper>
<CarDescrp>
    <DescrpItem>{car.address.split(",")[1]}</DescrpItem>
    <DescrpItem>{car.address.split(",")[2]}</DescrpItem>
    <DescrpItem>{car.rentalCompany}</DescrpItem>
    <DescrpItem>{car.type}</DescrpItem>
    <DescrpItem>{car.model}</DescrpItem>
    <DescrpItem>{car.id}</DescrpItem>
    <DescrpItem>{car.accessories[0]}</DescrpItem>
</CarDescrp>
<SvgIcon onClick={()=>toggleFavorite(car)} favorite={!!getLocal().find(({ id }) => id === car.id)} width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
             <path d="M15.6301 2.45753C15.247 2.07428 14.7922 1.77026 14.2916 1.56284C13.791 1.35542 13.2545 1.24866 12.7126 1.24866C12.1707 1.24866 11.6342 1.35542 11.1336 1.56284C10.633 1.77026 10.1782 2.07428 9.79509 2.45753L9.00009 3.25253L8.20509 2.45753C7.43132 1.68376 6.38186 1.24906 5.28759 1.24906C4.19331 1.24906 3.14386 1.68376 2.37009 2.45753C1.59632 3.2313 1.16162 4.28075 1.16162 5.37503C1.16162 6.4693 1.59632 7.51876 2.37009 8.29253L3.16509 9.08753L9.00009 14.9225L14.8351 9.08753L15.6301 8.29253C16.0133 7.90946 16.3174 7.45464 16.5248 6.95404C16.7322 6.45345 16.839 5.91689 16.839 5.37503C16.839 4.83316 16.7322 4.2966 16.5248 3.79601C16.3174 3.29542 16.0133 2.84059 15.6301 2.45753Z" stroke="white" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</SvgIcon>
<Button toggleModal={toggleModal}/>
</CarCard>
{isModal && ReactDOM.createPortal (<Modal onClose={toggleModal}><><CarInfo car={car} onClose={toggleModal}/></></Modal>, document.querySelector('#modal-root') as HTMLElement)}
</>
)}