import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAccountInfo } from "src/actions/user";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

export default function EditProfile() {
  const dispatch = useDispatch();
  const { account, isLoading, error } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // useEffect(() => {
  //   const account = localStorage.getItem("userInfo")
  //     ? JSON.parse(localStorage.getItem("userInfo"))
  //     : null;
  //   if (account) {
  //     console.log(account);

  //   }
  // }, []);

  let result = [account].flat();

  let handleUpdate = () => {
    dispatch(updateAccountInfo(account));
  };
  return (
    <form onSubmit={handleSubmit(handleUpdate)}>
      {result.map((item) => (
        <>
          <div className="form-group">
            <Controller
              name="taiKhoan"
              control={control}
              defaultValue={item.taiKhoan}
              render={({ field }) => {
                return <input type="text" {...field} />;
              }}
            />
          </div>
          <div className="form-group">
            <Controller
              name="matKhau"
              control={control}
              defaultValue={item.matKhau}
              render={({ field }) => {
                return <input type="password" {...field} />;
              }}
            />
          </div>
          <div className="form-group">
            <Controller
              name="hoTen"
              control={control}
              defaultValue={item.hoTen}
              render={({ field }) => {
                return <input type="text" {...field} />;
              }}
            />
          </div>
          <div className="form-group">
            <Controller
              name="soDT"
              control={control}
              defaultValue={item.soDT}
              render={({ field }) => {
                return <input type="text" {...field} />;
              }}
            />
          </div>
          <div className="form-group">
            <Controller
              name="maNhom"
              control={control}
              defaultValue={item.maNhom}
              render={({ field }) => {
                return <input type="text" {...field} />;
              }}
            />
          </div>

          <div className="form-group">
            <Controller
              name="email"
              control={control}
              defaultValue={item.email}
              render={({ field }) => {
                return <input type="email" {...field} />;
              }}
            />
          </div>
        </>
      ))}
    </form>
  );
}
