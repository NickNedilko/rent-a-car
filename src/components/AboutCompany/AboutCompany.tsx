
import logo  from '../../assets/logo-rent-car.png'
import { Btn, Img, Item, List, Title, Wrapper } from './AboutCompany.styled'






export const AboutCompany = () => {
    
    return (
         <Wrapper>
            <Img src={logo} alt="logo" />
            <div>
                <Title>Prestige auto HIRE Concept</Title>
                <List>
                    <Item>
                    Prestige auto rentals – our services are built around the needs of our clients. Not only is our fleet of luxurious cars stored in a professional and secure storage center but we also have the right mechanics, who are experienced in maintaining and servicing the cars. You can choose the right-fit vehicle.
                </Item>
                <Item>
                  Prestige auto rentals different from other car hire companies. We own the cars and that gives us complete control not just over the maintenance and servicing but also over the specifications. Hence, we provide our clients with high-end luxury cars that fit into their lifestyles.
                </Item>
                <Item>
                    We have a team of experts who will fill you with every feature that your chosen car possesses. That way, you will be able to take complete advantage of the car and enjoy its usage to the maximum.
                </Item>
                </List>

                <Btn to='catalog'>Car catalog</Btn>
            </div>
        </Wrapper>
    )
}