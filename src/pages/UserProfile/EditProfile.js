import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAccountInfo } from "src/actions/user";
import { ButtonRed, Alert } from "src/styles";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";

//create schema validation
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
  soDt: yup.string().notRequired(),
  hoTen: yup.string().required("Full name is required"),
  email: yup.string().email().required("Email is required"),
});

const UserForm = styled.form`
  .form-wrapper {
    padding: 2rem 10rem;
    .disabled {
      display: none !important;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      input {
        display: block;
        width: 100%;
        height: 4.5rem;
        padding: 1rem 1.2rem;
        font-size: 1.6rem;
        line-height: 1.43;
        color: #29303b;
        background-color: #fff;
        background-image: none;
        border: 1px solid #8a92a3;
        border-radius: 2px;
        box-shadow: none;
        transition: border-color ease-in-out 0.08s, box-shadow ease-in-out 0.08s;
      }
      input:disabled {
        background: #8a92a3;
      }
    }
    label {
      padding: 1rem 0;
    }
    @media screen and (max-width: 1200px) {
      padding: 2rem 5rem;
    }
    @media screen and (max-width: 800px) {
      padding: 2rem;
    }
  }
  .action-form {
    box-shadow: 0 1px 0 0 #fff, 0 -1px 0 0 #dedfe0;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    button {
      margin-top: 1rem;
    }
  }
`;

export default function EditProfile() {
  const dispatch = useDispatch();
  const { account, error } = useSelector((state) => state.user);

  const [userUpdate, setUserUpdate] = useState(account);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  let handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateAccountInfo(userUpdate));
    alert("Update successfully!");
  };
  let handleChange = (e) => {
    const { value, name } = e.target;
    // console.log(name, value);
    setUserUpdate((userUpdate) => ({ ...userUpdate, [name]: value }));
    // console.log(userUpdate);
  };

  let result = [userUpdate].flat();

  return (
    <UserForm onSubmit={handleSubmit(handleUpdate)}>
      <div className="form-wrapper">
        {result.map((item) => (
          <div key={item.taiKhoan}>
            <div className="form-group">
              <label>Account</label>
              <input
                type="text"
                disabled
                placeholder="Username"
                defaultValue={item.taiKhoan}
                {...register("taiKhoan")}
              />
            </div>
            {errors.taiKhoan && (
              <Alert style={{ color: "#ec5252" }}>
                {errors.taiKhoan.message}
              </Alert>
            )}

            <div className="form-group">
              <label>Password</label>
              <Controller
                name="matKhau"
                control={control}
                defaultValue={item.matKhau}
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

            <div className="form-group">
              <label>Full name</label>
              <input
                type="text"
                placeholder="Full name"
                defaultValue={item.hoTen}
                {...register("hoTen")}
              />
            </div>
            {errors.hoTen && <Alert>{errors.hoTen.message}</Alert>}
            <div className="form-group">
              <label>Phone number</label>
              <input
                type="text"
                placeholder="Phone number"
                defaultValue={item.soDT}
                {...register("soDT")}
              />
            </div>
            {errors.soDT && <Alert>{errors.soDT.message}</Alert>}
            <div className="form-group disabled">
              <input
                name="maLoaiNguoiDung"
                type="text"
                defaultValue={item.maLoaiNguoiDung}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Group ID</label>
              <input
                name="maNhom"
                type="text"
                defaultValue={item.maNhom}
                disabled
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="text" defaultValue={item.email} placeholder="Email" {...register("email")} />
            </div>
            {errors.email && <Alert>{errors.email.message}</Alert>}
            {error && <Alert style={{ color: "#ec5252" }}>{error}</Alert>}
          </div>
        ))}
      </div>
      <div className="action-form">
        <ButtonRed type="submit">Save</ButtonRed>
      </div>
    </UserForm>
  );
}
