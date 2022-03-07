import styled from 'styled-components';
import { ReactComponent as truck } from '../../../assets/Icons/Truck.svg';

export const Container = styled.div`
  display: flex;
  height: 1379px;
  padding-left: 250px;
  width: 100%;
  margin-top: 200px;
  box-shadow: 7px 7px 18px rgba(0, 0, 0, 0.3);
  flex-direction: column;
`;

export const SmallContainer = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;
  /* identical to box height */

  color: #4f4f4f;
`;

export const Text = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 25px;
  width: 411px;
  height: 300px;
  margin-top: 15px;

  /* identical to box height */

  color: #4f4f4f;
`;

export const Image = styled.img`
  width: 546px;
  height: 363px;
  cursor: pointer;
  margin-top: 80px;
`;

export const Icon = styled(truck)`
  width: 119px;
  height: 57px;
`;
