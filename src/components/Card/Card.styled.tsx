import styled from 'styled-components';


export const CarCard = styled.li`
    width: 274px;
    position: relative;
    min-height: 426px;
`

export const Img = styled.img`
    width: 274px;
    height: 268px;
    object-fit: cover;
    border-radius: 6px;
    overflow: hidden;

`

export const CarDescrp = styled.ul`
    
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 28px;
`
export const Wrapper = styled.div`
    display: flex;
    margin-top: 14px;
    margin-bottom: 8px;
    justify-content: space-between;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500px;
`

export const Model = styled.span`
    color: rgba(52, 112, 255, 1);
`

export const DescrpItem= styled.li`
    font-size: 12px;
    color: rgba(18, 20, 23, 0.5);
    line-height: 18px;
    padding-right: 6px;
    border-right: 1px solid black;
    &:last-child{
        border: none;
    }
`
export const SvgIcon = styled.svg`
     position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
    fill: ${(props)=>(props.favorite ? "blue" : "white")}
`