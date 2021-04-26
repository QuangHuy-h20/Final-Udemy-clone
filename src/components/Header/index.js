import React from "react";
import { Link } from "react-router-dom";
import {
  ImgLogo,
  Nav,
  NavbarContainer,
  LinkNav,
  PopupHover,
  SearchBar,
  StyledButton,
  StyledInput,
  ButtonAuth,
  LinkAuth,
  StyledSpan,
  MobileIcon,
  NavbarMobile,
} from "./NavbarElements";
import { Menu, Dropdown, Space, Button } from "antd";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import logo from "../../images/logo-coral.svg";

// import { Button } from "@material-ui/core";
const Header = () => {
  return (
    <>
      <Nav>
        <NavbarMobile>
          {/* <MobileIcon></MobileIcon>
          <LinkNav to="/">
            <ImgLogo src={logo} alt="ude-logo" />
          </LinkNav>
          <StyledButton>
            <SearchOutlined style={{ fontSize: "2rem" }} />
          </StyledButton>
          <Link to="">
            <StyledButton>
              <ShoppingCartOutlined style={{ fontSize: "2rem" }} />
            </StyledButton>
          </Link> */}
        </NavbarMobile>
        <NavbarContainer>
          <LinkNav to="/">
            <ImgLogo src={logo} alt="ude-logo" />
          </LinkNav>
          <PopupHover>
            <StyledButton>
              <span>Categories</span>
            </StyledButton>
          </PopupHover>
          <SearchBar>
            <StyledButton>
              <SearchOutlined style={{ fontSize: "2rem" }} />
            </StyledButton>
            <StyledInput placeholder="Search for anything" />
          </SearchBar>
          <PopupHover>
            <StyledButton>
              <StyledSpan>Udemy for Business</StyledSpan>
            </StyledButton>
          </PopupHover>
          <PopupHover>
            <StyledButton>
              <StyledSpan>Teach on Udemy</StyledSpan>
            </StyledButton>
          </PopupHover>
          <PopupHover>
            <Link to="">
              <StyledButton>
                <ShoppingCartOutlined style={{ fontSize: "2rem" }} />
              </StyledButton>
            </Link>
          </PopupHover>
          <ButtonAuth>
            <LinkAuth className="log-in">Log in</LinkAuth>
          </ButtonAuth>
          <ButtonAuth>
            <LinkAuth className="sign-up">Sign up</LinkAuth>
          </ButtonAuth>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Header;
