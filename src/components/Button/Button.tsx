import { FC } from "react"
import { Buttons } from "./Button.styled"

interface ButtonProps {
    toggleModal: () => void;
}

export const Button: FC<ButtonProps> = ({toggleModal}) =>{
  
        
    
    return (
        <Buttons onClick={()=>toggleModal()} type="button">Learn more</Buttons>
        
    ) 
    }