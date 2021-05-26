import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccountInfo } from "src/actions/user";
import styled from "styled-components";
import { Link, Route, Switch } from "react-router-dom";
import EditProfile from "./EditProfile";
import PublicProfile from "./PublicProfile";

const UserSection = styled.section`
  margin: 0 auto;
  padding: 0 1.5rem;
  min-width: 32rem;
  width: 117rem;

  @media screen and (max-width: 1200px) {
    width: 97rem;
  }
  @media screen and (max-width: 992px) {
    width: 75rem;
  }
`;

const Container = styled.div`
  margin: 2rem auto 4rem;
  max-width: 110rem;
`;

const Content = styled.div`
  position: relative;
  padding-left: 20rem;
`;

const MenuSideBar = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  background: #fff;
  position: absolute;
  width: 20rem;
  box-shadow: 1px 1px #dedfe0 inset, 0 -1px #dedfe0 inset;
  overflow: hidden;
  padding-bottom: 20px;
  li {
    padding: 1rem;
  }
`;

const Public = styled.div`
  padding: 1rem;
  text-align: center;
  .wrapper {
    margin: auto;
    width: 15rem;
    height: 15rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
  .userName {
    margin-top: 3rem;
    font-size: 1.6rem;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const FormWrapper = styled.div`
  background: #fff;
  position: relative;
  min-height: 60rem;
  margin: 2rem auto;
  border: 1px solid #dedfe0;

  h2 {
    color: #29303b;
    text-align: center;
    line-height: 1 !important;
    font-weight: 700 !important;
    font-size: 2.2rem;
    margin: 2rem 0 0.3rem;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #29303b;
    text-align: center;
    margin: 0 0 1.5rem;
    line-height: 2.5rem;
  }
  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #29303b;
    padding: 1.5rem;
    span {
      font-weight: normal;
      padding-left: 1.5rem;
    }
  }
`;
const CourseEnroll = styled.div``;

const FormContainer = styled.div`
  box-shadow: 0 1px 0 0 #fff, 0 -1px 0 0 #dedfe0;
`;

export default function UserProfile({ children }) {
  const dispatch = useDispatch();
  const { account, isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    const account = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
    if (account) {
      console.log(account);
      dispatch(getAccountInfo(account));
    }
  }, []);

  let result = [account].flat();

  return (
    <UserSection>
      <Container>
        {result.map((item) => (
          <Content>
            <MenuSideBar>
              <Public>
                <div className="wrapper">
                  <img src="https://i.pravatar.cc/300" alt="avatar" />
                </div>
                <div className="userName">
                  <h1>{item.hoTen}</h1>
                </div>
              </Public>
              <ul>
                <li>
                  <Link to="/user/public-profile">Public profile</Link>
                </li>
                <li>
                  <Link to="/user/edit-profile">Edit profile</Link>
                </li>
                <li>
                  <Link to="/user/course-enroll">Course enroll</Link>
                </li>
              </ul>
            </MenuSideBar>
            <FormWrapper>
              <h2>Public profile</h2>
              <h3>Add information about yourself</h3>
              <form>
                <FormContainer>{children}</FormContainer>
              </form>
            </FormWrapper>
          </Content>
        ))}
      </Container>
    </UserSection>
  );
}
