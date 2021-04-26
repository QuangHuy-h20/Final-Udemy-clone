import React from "react";
import {
  FooterSection,
  FooterWrap,
  Menu,
  MenuItem,
  Item,
  Lang,
} from "./FooterElements";
import { LinkAuth, StyledSpan } from "../Header/NavbarElements";
import { GlobalOutlined } from "@ant-design/icons";
const Footer = () => {
  return (
    <FooterSection>
      <FooterWrap>
        <Menu>
          <MenuItem>
            <Item to="/">Udemy for Business</Item>
          </MenuItem>
          <MenuItem>
            <Item to="/">Teach on Udemy</Item>
          </MenuItem>
          <MenuItem>
            <Item to="/">Get the app</Item>
          </MenuItem>
          <MenuItem>
            <Item to="/">About us</Item>
          </MenuItem>
          <MenuItem>
            <Item to="/">Contact us</Item>
          </MenuItem>
        </Menu>
        <Menu>
          <MenuItem>
            <Item to="/">Careers</Item>
          </MenuItem>
          <MenuItem>
            <Item to="/">Blog</Item>
          </MenuItem>
          <MenuItem>
            <Item to="/">Help And Support</Item>
          </MenuItem>
          <MenuItem>
            <Item to="/">Affiliate</Item>
          </MenuItem>
        </Menu>
        <Menu>
          <MenuItem>
            <Item to="/">Terms</Item>
          </MenuItem>
          <MenuItem>
            <Item to="/">Privacy policy</Item>
          </MenuItem>
          <MenuItem>
            <Item to="/">Sitemap</Item>
          </MenuItem>
          <MenuItem>
            <Item to="/">Featured courses</Item>
          </MenuItem>
        </Menu>
        <Lang>
          <LinkAuth>
            <GlobalOutlined />
            <StyledSpan>English</StyledSpan>
          </LinkAuth>
        </Lang>
      </FooterWrap>
    </FooterSection>
  );
};

export default Footer;
