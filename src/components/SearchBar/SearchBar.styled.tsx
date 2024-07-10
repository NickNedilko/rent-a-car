import styled from 'styled-components';
import { Field } from 'formik';

export const MainContainer = styled.div`
  padding-top: 60px;
  height: 74px;
  width: 859px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`;
export const FormContainer = styled.div`
  height: 90px;
  align-items: flex-end;
  display: flex;
`;
export const FormDesc = styled.p`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 8px;
`;
export const InputContainer = styled.div`
  margin-right: 18px;
`;
export const InputName = styled(Field)`
  border-radius: 14px;
  background: #f7f7fb;
  width: 224px;
  height: 48px;
  border: none;
  padding: 0 14px;
  box-sizing: border-box;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    border: 1px solid #3470ff;
  }
`;
export const InputPrice = styled(Field)`
  border-radius: 14px;
  background: #f7f7fb;
  width: 125px;
  height: 48px;
  border: none;
  box-sizing: border-box;
  padding: 0 14px;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    border: 1px solid #3470ff;
  }
`;
export const FromMileage = styled(Field)`
  border-bottom-left-radius: 14px;
  border-top-left-radius: 14px;
  background: #f7f7fb;
  width: 160px;
  height: 48px;
  padding: 0 14px;
  border-right-color: rgba(138, 138, 137, 0.2);
  border-left: none;
  border-top: none;
  border-bottom: none;
  box-sizing: border-box;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    border: 1px solid #3470ff;
  }
`;
export const ToMileage = styled(Field)`
  border-bottom-right-radius: 14px;
  border-top-right-radius: 14px;
  background: #f7f7fb;
  width: 160px;
  height: 48px;
  border: none;
  box-sizing: border-box;
  padding: 0 14px;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    border: 1px solid #3470ff;
  }
`;
export const Button = styled.button`
  border-radius: 12px;
  background: #3470ff;
  width: 136px;
  height: 48px;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  &:hover {
    background: #0b44cd;
  }
`;