import { getCars } from "../../apiServices/apiServices";

import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import { Car } from "../../types/types";
import { useFavorites } from "../../hooks/useFavorites";
import { CarList } from "../../components/CarList/CarList";
import { LoadMoreBtn } from "../../components/CarList/CarList.styled";
import { Loader } from "../../components/Loader/Loader";
import { Wrapper } from "../../components/Loader/Loader.styled";





const CatalogPage = ()=>{
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1);
  
  
  const disabledBtn = cars?.length/page < 8;
  
  const {toggleFavorite} = useFavorites();

  useEffect(() => {
  
  async function getData(){
    try {
      setIsLoading(true)
      const {data} = await getCars(page);
     
      setCars(prevState=>[...prevState, ...data])
      setIsLoading(false)
  
    } catch (error) {
      console.log(error.message)
    }
  }
     getData()
  }, [page])
  
  const loadMoreClick = () =>{
      setPage(prevState=>prevState + 1)
    
  }

  return(
    <>
    <CarList cars={cars} toggleFavorite={toggleFavorite}/>
      {isLoading && <Loader />}
      <Wrapper>
      <LoadMoreBtn onClick={loadMoreClick} type="button" disabled={disabledBtn}>Load more</LoadMoreBtn>
      </Wrapper>
        </>
  )
}

export default CatalogPage;