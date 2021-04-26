import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
// import {} from 'antd'

export const FooterSection = styled.div`
  border-top: 1px solid #dcdacb;
  @media screen and (min-width: 75.06em) {
    padding: 0 4.8rem;
  }
  @media screen and (min-width: 61.31em) {
    padding: 0 4.8rem;
  }
  @media screen and (min-width: 43.81em) {
    padding: 2.4rem 4.8rem 0;
  }
`;

export const FooterWrap = styled.div`
  display: flex;
`;

export const Menu = styled.ul`
  flex-basis: 25rem;
  margin-right: 1.6rem;
`;

export const MenuItem = styled.li``;

export const Item = styled(LinkRouter)`
  display: block;
  padding: 0.4rem 0;
  font-size: 1.4rem;
  font-weight: 400;
  &:hover {
    color: #094c59;
  }
`;

export const Lang = styled.div`
  order: 1;
  margin-left: auto;
  width:20rem;
`;

export const ButtonLang = styled.button`
  color: #0f7c90;
  background-color: transparent;
  border: 1px solid #2896a9;
  height: 4.8rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-size:1.6rem;
  font-weight:700;
  width:10rem;
  padding: 1rem 1.2rem;
`;
