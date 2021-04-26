import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
// import {Link as LinkScroll} from 'react-scroll'
import { Button, Input, Form } from "antd";
export const Nav = styled.nav`
  display: flex;
  font-size: 1.4rem;
  position: relative;
  z-index: 999;
  padding: 0 1.6rem;
  height: 7.2rem;

  box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);

  @media screen and (max-width: 968px) {
    transition: 0.5 all ease;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavbarMobile = styled.div`
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  z-index: 1;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LinkNav = styled(LinkRouter)`
  cursor: pointer;
  padding-right: 12px;
  display: flex;
`;

export const ImgLogo = styled.img`
  max-width: 100%;
  height: 32px;
  width: 110px;
`;

export const StyledButton = styled(Button)`
  background-color: #fff;
  color: #73726c;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  align-self: center;
  padding: 0 1.2rem;
  margin: 1.2rem 0;
  cursor: pointer;
  user-select: none;
  vertical-align: bottom;
  white-space: nowrap;
  min-width: auto;
  height: 4.8rem;
  &:hover {
    color: #0f7c90;
  }
`;

export const SearchBar = styled(Form)`
  max-width: none;
  display: flex;
  flex-grow: 1;
  height: 4.8rem;
  border: 1px solid #989586;
  border-radius: 9999px;
  background-color: #fbfbf8;
  margin: 0 1.2rem;
`;

export const StyledInput = styled(Input)`
  display: block;
  width: 100%;
  background-color: transparent;
  border: none;
  padding: 1.6rem 0 1.6rem 0.4rem;
`;

export const PopupHover = styled.div`
  position: relative;
  display: flex;
`;

export const ButtonAuth = styled.div`
  margin-left: 0.8rem;
`;

export const StyledSpan = styled.span`
  font-size: 1.4rem;
`;

export const LinkAuth = styled(LinkRouter)`
  min-width: 10rem;
  text-align: center;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  padding: 0 1.2rem;
  font-weight: 700;
  border: 1px solid #1c6a78;
  border-radius: 4px;
  &.log-in {
    color: #0f7c90;
    border: 1px solid #2896a9;
    &:hover {
      color: #094c59;
    }
  }
  &.sign-up {
    background-color: #0f7c90;
    color: #fff;
    &:hover {
      background-color: #094c59;
    }
  }
`;
