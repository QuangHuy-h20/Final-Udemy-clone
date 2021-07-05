import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAccountInfo } from "src/actions/user";
import { ButtonRed } from "src/styles";
import styled from "styled-components";

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
      input:disabled{
        background: #8a92a3;
      }
    }
    label {
      padding: 1rem 0;
    }
    @media screen and (max-width:1200px){
      padding: 2rem 5rem;
    }
    @media screen and (max-width:800px){
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
  const { account } = useSelector((state) => state.user);

  const [userUpdate, setUserUpdate] = useState(account);

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
    <UserForm onSubmit={handleUpdate}>
      <div className="form-wrapper">
        {result.map((item) => (
          <div key={item.taiKhoan}>
            <div className="form-group">
              <label>Account</label>
              <input
                name="taiKhoan"
                type="text"
                defaultValue={item.taiKhoan}
                disabled
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                name="matKhau"
                type="password"
                autoComplete="on"
                defaultValue={item.matKhau}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Full name</label>
              <input
                name="hoTen"
                type="text"
                defaultValue={item.hoTen}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Phone number</label>
              <input
                name="soDT"
                type="text"
                defaultValue={item.soDT}
                onChange={handleChange}
              />
            </div>
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
              <input
                name="email"
                type="text"
                defaultValue={item.email}
                onChange={handleChange}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="action-form">
        <ButtonRed type="submit">Save</ButtonRed>
      </div>
    </UserForm>
  );
}
