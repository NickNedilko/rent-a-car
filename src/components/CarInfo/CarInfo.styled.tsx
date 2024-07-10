import styled from "styled-components";


export const Wrapper = styled.div`
    padding: 40px;
    position: relative;
`

export const CarName = styled.p`
    font-size: 18px;
    margin-bottom: 8px;
`
export const CarImg = styled.img`
    border-radius: 12px;
    margin-bottom: 14px;
`
export const Text = styled.p`
    font-size: 14px;
    margin-bottom: 24px;
`
export const Conditions = styled.p`
font-size: 14px;
font-weight: 500;
margin-bottom: 8px;
`


export const CarDescrp = styled.ul`
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 14px;
`
export const CarDescrp1 = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 28px;
`

export const Model = styled.span`
    color: rgba(52, 112, 255, 1);
`
export const DescrpItem= styled.li`
    font-size: 12px;
    color: rgba(18, 20, 23, 0.5);
    line-height: 18px;
    margin-bottom: 4px;
    padding-right: 6px;
    border-right: 1px solid black;
    &:last-child{
        border: none;
    }
`
export const ItemList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
`

export const Item = styled.li`
    padding: 7px 14px;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    border-radius: 35px;
    background-color:  rgba(249, 249, 249, 1);

`
export const Svg = styled.svg`
    position: absolute;
    top: 16px;
    right: 16px;
`
export const Btn = styled.a`
    padding: 12px 52px;
    text-decoration: none;
    border-radius: 12px;
    color: white;
    background-color:  rgba(52, 112, 255, 1);
    &:hover{
    background-color: #0B44CD;
};
`