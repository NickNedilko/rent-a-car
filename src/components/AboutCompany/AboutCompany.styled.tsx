import styled from "styled-components";


import { Link } from "react-router-dom";


export const Wrapper = styled.div`
    display: flex;
    gap: 30px;
    text-align: center;

`


export const Title = styled.h2`
font-size: 30px;
text-align: center;
margin-bottom: 20px;
 color: var(--title-color);
`
export const Img = styled.img`
      width: 800px;
    height: 470px;
`

export const List = styled.ul`
text-align: left;
margin-bottom: 30px;
font-size: 18px;


`
export const Item = styled.li`
    list-style-image: url('../../../public/rocket.svg'); 
    margin-bottom: 15px;
`

export const Btn = styled(Link)`
   width: 274px;
height: 44px;
padding: 15px;
border-radius: 12px;
font-family: "Manrope";
font-size: 14px;
line-height: 20px;
font-weight: 600;
color: #fff;
border: transparent;
background-color: #3470FF;
&:hover{
    background-color: #0B44CD;
}

`