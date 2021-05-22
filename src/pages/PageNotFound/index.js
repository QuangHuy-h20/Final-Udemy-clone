import React from "react";
import styled from "styled-components";
import { ButtonRed } from "../../styles";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  background: #fbfbf8;
  height: 70rem;
  max-width: 100%;
  text-align: center;
  flex-direction: column;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  .content {
    margin-bottom: 1rem;
    h1 {
      font-size: 7.2rem;
      font-weight: 700;
    }
    p {
      font-size: 2.2rem;
    }
  }
`;

function PageNotFound() {
  return (
    <Container>
      <div className="content">
        <h1>404 Page Not Found!</h1>
        <p>Oops! Looks like something went wrong.</p>
      </div>
      <ButtonRed>
        <Link to="/" style={{ color: "#fff" }}>
          Back to HomePage
        </Link>
      </ButtonRed>
    </Container>
  );
}

export default PageNotFound;
