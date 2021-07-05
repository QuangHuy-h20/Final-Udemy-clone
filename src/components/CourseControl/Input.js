import { TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  margin-bottom: 1.2rem;
`;

const StyledLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
`;

const StyledInput = styled.input`
  border: 1px solid rgba(7, 3, 16, 0.1);
  border-radius: 12px;
  padding: 1rem;
  ouline: none;
  transition: border-color 0.25 ease-in-out;
  &::placeholder {
    color: #878893;
    font-style: italic;
  }
  &:focus {
    border-color: linear-gradient(60deg, #ab47bc, #8e24aa);
  }
`;
export default function Input(props) {
  const {
    label,
    name,
    value,
    id,
    error = null,
    className,
    onChange,
    type,
    ...rest
  } = props;
  return (
    <StyledDiv>
      <TextField 
        fullWidth
        id={id}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        className={className ? className : ""}
        {...rest}
        {...(error && {error:true, helperText:error})}
      />
    </StyledDiv>
  );
}
