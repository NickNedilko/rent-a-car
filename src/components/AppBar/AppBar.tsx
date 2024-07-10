import  {FC} from "react"
import { List, Logo, Nav, StyledLink } from "./AppBar.styled"
import logo  from '../../assets/logo-rent-car.png'


export const AppBar: FC = () => {
    return (
      <Nav>
        <StyledLink to="/" 
          aria-label='home'>
                <Logo src={logo} alt="logo" />
            </StyledLink>
        <List>
          <li><StyledLink to="/" 
          aria-label='home'
            >Home</StyledLink></li>
          <li><StyledLink to="catalog" 
          aria-label='catalog'
          >Car Catalog</StyledLink></li>
          <li><StyledLink to="favorite" 
          aria-label='favorite'
          >Favorite cars</StyledLink></li>
        </List>
      </Nav>
    )
}