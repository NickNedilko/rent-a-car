import { getCars } from "../../apiServices/apiServices";
import { useEffect, useState } from "react";
import { Car } from "../../types/types";
import { useFavorites } from "../../hooks/useFavorites";
import { CarList } from "../../components/CarList/CarList";
import { LoadMoreBtn } from "../../components/CarList/CarList.styled";
import { Loader } from "../../components/Loader/Loader";
import { Wrapper } from "../../components/Loader/Loader.styled";
import { SearchBar } from "../../components/SearchBar/SearchBar";





const CatalogPage = ()=>{
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string>('');

  
  
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
      console.log(error)
      setError(error)
    }
  }
     getData()
  }, [page])
  
  const loadMoreClick = () =>{
      setPage(prevState=>prevState + 1)
    
  }
  
  interface Values{
    name: string;
    price: string;
    from: string;
    to: string
}
  
  const handleSubmit = (values:Values) => {
    const { name, price, from, to } = values;
    let sortedCars: Car[];
    if (name !== '') {
      sortedCars = cars.filter(car => car.make === name)
      console.log('name', sortedCars)
      setCars(sortedCars);
    }
    if (price !== '') {
      sortedCars = cars.filter(car => car.rentalPrice >= price)
    }
     if (from !== '') {
      sortedCars = cars.filter(car =>( car.mileage >= from) && (car.mileage<= to))
    }
    setCars(sortedCars);
}

  return(
    <>
      <SearchBar onSubmit={handleSubmit } />
    <CarList cars={cars} toggleFavorite={toggleFavorite}/>
      {isLoading && <Loader />}
      <Wrapper>
      <LoadMoreBtn onClick={loadMoreClick} type="button" disabled={disabledBtn}>Load more</LoadMoreBtn>
      </Wrapper>
        </>
  )
}

export default CatalogPage;