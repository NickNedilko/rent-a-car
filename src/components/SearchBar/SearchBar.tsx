import { Formik, Form } from 'formik';

import {
  MainContainer,
  FormContainer,
  FormDesc,
  InputName,
  InputPrice,
  FromMileage,
  ToMileage,
  Button,
  InputContainer,
} from './SearchBar.styled';


const initialValue = {
  name: '',
  price: '',
  from: '',
  to: '',
};
const prs = [
  'To $',
  '$30',
  '$40',
  '$50',
  '$60',
  '$70',
  '$80',
  '$90',
  '$100',
  '$120',
  '$130',
  '$140',
  '$150',
  '$160',
  '$170',
  '$180',
  '$190',
  '$200',
];
const model = [
  'All cars',
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Chrysler',
  'Kia',
  'Land',
];



export const SearchBar =({onSubmit}) => {
  return (
    <MainContainer>
      <Formik initialValues={initialValue} onSubmit={(values, formik) => {
        onSubmit(values)
        formik.resetForm()
      }}>
        <Form>
          <FormContainer>
            <InputContainer>
              <FormDesc>Car brand</FormDesc>
              <InputName
                component="select"
                name="name"
                placeholder="Enter the text"
              >
                {model.map(name => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </InputName>
            </InputContainer>
            <InputContainer>
              <FormDesc>Price/ 1 hour</FormDesc>
              <InputPrice component="select" name="price" placeholder="To $">
                {prs.map(val => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </InputPrice>
            </InputContainer>
            <div>
              <FormDesc>Сar mileage / km</FormDesc>
              <FromMileage type="number" name="from" placeholder="From " />
            </div>
            <InputContainer>
              <ToMileage type="number" name="to" placeholder="To" />
            </InputContainer>
            <Button type="submit">Search</Button>
          </FormContainer>
        </Form>
      </Formik>
    </MainContainer>
  );
};

