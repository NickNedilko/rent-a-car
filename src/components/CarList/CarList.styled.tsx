import styled from 'styled-components';



export const ListCars = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 29px;
    margin: 0 auto;
    justify-content: center;
`

export const LoadMoreBtn = styled.button`
    padding: 10px;
   margin-top: 15px;
    border-radius: 10px;
    border: none;
    background-color: #fff;
    
    color:  #3470FF;
    &:hover{
        color: #0B44CD;
    }
    &:disabled{
        color: grey;
        display: none;
    }
;
`
export const Loader = styled.div`
margin-top: 20px;
   display: flex;
   justify-content: center;
    
`