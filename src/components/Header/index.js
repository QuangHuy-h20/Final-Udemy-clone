import React from "react";
import styled from "styled-components";
import {
  Button,
  StyledForm,
  SmallButton,
  ButtonLogo,
  Logo,
} from "../../styles";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/auth";

import logo from "../../images/logo-coral.svg";
import { Link } from "react-router-dom";

const HeaderSection = styled.header`
  display: flex;
  font-size: 1.4rem;
  position: relative;
  z-index: 999;
  padding: 0 1.6rem;
  height: 7.2rem;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);

  @media screen and (max-width: 800px) {
    display: block;
  }

  img {
    max-width: 100%;
    height: 3.2rem;
    width: 11rem;
    &.imgCenter {
      @media screen and (max-width: 800px) {
        flex: 1;
      }
    }
  }
`;

const Mobile = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .toggle {
    padding: 0 1.2rem;
    cursor: pointer;
  }
  .empty {
    width: 4.8rem;
    height: 4.8rem;
  }
  .logo-mobile {
    flex: 1;
  }
  span {
    font-size: 2rem;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  z-index: 1;
  width: 100%;
  @media screen and (max-width: 800px) {
    display: none;
  }

  .trigger {
    position: relative;
    display: flex;
    &.trigger {
      @media screen and (max-width: 1100px) {
        display: none;
      }
    }
  }
  .cart {
    color: #73726c;
    font-size: 2.4rem;
  }
`;

const SearchForm = styled.div`
  max-width: none;
  display: flex;
  flex-grow: 1;
  height: 4.8rem;
  border: 1px solid #989586;
  border-radius: 9999px;
  background-color: #fbfbf8;
  margin: 0 1.2rem;
`;

const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const handleLogout = (data) => {
    localStorage.clear();
    dispatch(logout(data));
  };
  return (
    <>
      <HeaderSection>
        <Mobile>
          <div className="toggle">
            <MenuOutlined />
          </div>
          <div className="empty" />
          <ButtonLogo to="/" className="logo-mobile">
            <Logo src={logo} alt="ude-logo" className="imgCenter" />
          </ButtonLogo>
          <SmallButton>
            <SearchOutlined />
          </SmallButton>
          <SmallButton to="/">
            <ShoppingCartOutlined />
          </SmallButton>
        </Mobile>
        <Navbar>
          <ButtonLogo to="/">
            <Logo src={logo} alt="ude-logo" className="imgCenter" />
          </ButtonLogo>
          <div className="trigger">
            <SmallButton>
              <span>Categories</span>
            </SmallButton>
          </div>
          <SearchForm>
            <StyledForm>
              <SmallButton to="/">
                <SearchOutlined />
              </SmallButton>
              <input placeholder="Search for anything" />
            </StyledForm>
          </SearchForm>
          <div className="trigger">
            <SmallButton to="/">
              <span>Udemy for Business</span>
            </SmallButton>
          </div>
          <div className="trigger">
            <SmallButton>
              <span>Teach on Udemy</span>
            </SmallButton>
          </div>
          <SmallButton to="/" className="cart">
            <ShoppingCartOutlined />
          </SmallButton>
          {userInfo ? (
            <>
              <Link to="/user">Hi, {userInfo.hoTen}</Link>
              <Button primary bd colorHover to="/" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button primary bd colorHover to="/login">
                Log in
              </Button>
              <Button color to="/signup">
                Sign up
              </Button>
            </>
          )}
        </Navbar>
      </HeaderSection>
    </>
  );
};

export default Header;
