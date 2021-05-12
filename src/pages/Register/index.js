import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router";
// import qs from "qs";
import { signUp } from "../../actions/auth";

import { MailFilled, LockFilled, UserOutlined } from "@ant-design/icons";
import {
  AuthForm,
  ActionForm,
  StyledLogin,
  StyledFooterLogin,
  Alert,
} from "../../styles";

const schema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("Username is required")
    .min(5, "Username must have 5 to 20 characters")
    .max(20, "Username must have 5 to 20 characters"),
  matKhau: yup
    .string()
    .required("Password is required")
    .min(5, "Password must have 5 to 20 characters")
    .max(20, "Password must have 5 to 20 characters"),
  hoTen: yup.string().required("Full name is required"),
  email: yup.string().required("Email is required"),
});

export default function Register() {
  const { userRegister, error } = useSelector((state) => state.register);
  const [registered, setRegistered] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = (data) => {
    console.log(data);
    setRegistered(true);
    if (userRegister) {
      dispatch(signUp(data));
      alert("Register Succesfully!");
    }
    return <Redirect to="/login" />;
  };

  return (
    <StyledLogin>
      <div className="title">Sign Up and Start Learning!</div>
      <div className="content">
        <AuthForm onSubmit={handleSubmit(handleRegister)}>
          <div className="form-field-container">
            <UserOutlined />

            <input
              type="text"
              placeholder="Username"
              {...register("taiKhoan")}
            />
          </div>
          {errors.taiKhoan && (
            <Alert style={{ color: "#ec5252" }}>
              {errors.taiKhoan.message}
            </Alert>
          )}
          <div className="form-field-container">
            <LockFilled />
            <Controller
              name="matKhau"
              control={control}
              defaultValue=""
              rules={{
                required: { value: true, message: "Password is required" },
                minLength: {
                  value: 5,
                  message: "Password must have 5 to 20 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password must have 5 to 20 characters",
                },
              }}
              render={({ field }) => {
                return (
                  <input type="password" placeholder="Password" {...field} />
                );
              }}
            />
          </div>
          {errors.matKhau && <Alert>{errors.matKhau.message}</Alert>}
          <div className="form-field-container">
            <UserOutlined />
            <input type="text" placeholder="Full name" {...register("hoTen")} />
          </div>
          {errors.hoTen && <Alert>{errors.hoTen.message}</Alert>}
          <div className="form-field-container">
            <UserOutlined />
            <input
              type="text"
              placeholder="Phone number"
              {...register("soDT")}
            />
          </div>
          {errors.hoTen && <Alert>{errors.soDT.message}</Alert>}
          <div className="form-field-container">
            <UserOutlined />
            <input type="text" placeholder="GroupID" {...register("maNhom")} />
          </div>
          {errors.maNhom && <Alert>{errors.maNhom.message}</Alert>}
          <div className="form-field-container">
            <MailFilled />

            <input type="text" placeholder="Email" {...register("email")} />
          </div>
          {errors.email && <Alert>{errors.email.message}</Alert>}
          <ActionForm>
            <div className="btn-submit">
              <button type="submit" handleRegister userRegister>
                Sign Up
              </button>
            </div>
          </ActionForm>
        </AuthForm>
        <StyledFooterLogin>
          <div>
            Already have an account?
            <Link to="/login">Log In</Link>
          </div>
        </StyledFooterLogin>
      </div>
    </StyledLogin>
  );
}
