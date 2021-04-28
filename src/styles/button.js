import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  margin-left: 0.8rem;
  border-radius: 0.3rem;
  background: ${({ primary }) => (primary ? "#fff" : "#0f7c90")};
  border: 1px solid ${({ bd }) => (bd ? "#0f7c90" : "#fff")};
  white-space: nowrap;
  padding: 0 1.2rem;
  color: ${({ color }) => (color ? "#fff" : "#0f7c90")};
  font-size: 1.4rem;
  outline: none;
  min-width: 10rem;
  height: 4rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${({ primary }) => (primary ? "#fff" : "#094c59")};
    color: ${({ colorHover }) => (colorHover ? "#094c59" : "#fff")};
  }
`;
