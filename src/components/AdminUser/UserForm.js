import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
//
import UserControl from '../UserControl/UserControl';
//
import {getUser,updateUser,addUser,getUserList} from '../../actions/admin';
const typeOfUser = [
  {
    value: "HV",
    label: "Student"
  },
  {
    value: "GV",
    label: "Teacher"
  }
]

export default function UserForm(props) {

  const dispatch = useDispatch();

  const {recordForEdit,setOpenModal, setRecordForEdit} = props;

  console.log('recordForEdit:',recordForEdit);

  const { userUpdate,error } = useSelector((state)=> state.admin);
  console.log(userUpdate)
  useEffect(()=>{
    console.log('useEffect UserForm')
    if(recordForEdit != null){
      dispatch(getUser(recordForEdit.hoTen))
    }
  },[recordForEdit])

  const addOrEdit = (values) => {
    if (!recordForEdit) {
      dispatch(addUser(values));
    } else {
      
      dispatch(updateUser(values));
    }
    setRecordForEdit(null)
    dispatch(getUserList());
    setOpenModal(false)
  }

  const formik = useFormik({
      enableReinitialize:true,
      initialValues:{
      taiKhoan: userUpdate? userUpdate.taiKhoan:'',
      matKhau: userUpdate? userUpdate.matKhau:'',
      hoTen: userUpdate? userUpdate.hoTen:'',
      soDt: userUpdate? userUpdate.soDt:'',
      maLoaiNguoiDung: userUpdate?userUpdate.maLoaiNguoiDung : 'HV',
      maNhom: userUpdate?userUpdate.maNhom: 'GP08',
      email: userUpdate? userUpdate.email:'',
    },
    validationSchema: Yup.object({
      taiKhoan: Yup
      .string()
      .required("This field is required.")
      .min(5, "Use from 5 to 20 characters for your account.")
      .max(20, "Use from 5 to 20 characters for your account."),
      matKhau: Yup.string().required("This field is required."),
      hoTen: Yup.string().required("This field is required."),
      email: Yup.string().required("This field is required."),
      soDt: Yup.number().integer().positive(),
      maLoaiNguoiDung: Yup.string(),
    }),
    onReset: () => {
      console.log("reset")
    },
    onSubmit:async(values) => {
      await addOrEdit(values)
      
    },
    onClose: () => {
      setRecordForEdit(null)
    },

  });

  
  return (
    <form
    onSubmit={formik.handleSubmit}
    onReset={formik.handleReset}
    >
      <Grid container>
        <Grid item xs={6}>
          <UserControl.Input
            fullWidth
            id="taiKhoan"
            name="taiKhoan"
            label="Account"
            value={formik.values.taiKhoan}
            onChange={formik.handleChange}
            error={formik.touched.taiKhoan && Boolean(formik.errors.taiKhoan)}
            helperText={formik.touched.taiKhoan && formik.errors.taiKhoan}
          />
          <UserControl.Input
            fullWidth
            id="hoTen"
            name="hoTen"
            label="Name"
            value={formik.values.hoTen}
            onChange={formik.handleChange}
            error={formik.touched.hoTen && Boolean(formik.errors.hoTen)}
            helperText={formik.touched.hoTen && formik.errors.hoTen}
          />
          <UserControl.Input
            fullWidth
            id="email"
            name="email"
            label="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={6}>
          <UserControl.Input
            fullWidth
            id="soDt"
            name="soDt"
            label="Phone"
            value={formik.values.soDt}
            onChange={formik.handleChange}
            error={formik.touched.soDt && Boolean(formik.errors.soDt)}
            helperText={formik.touched.soDt && formik.errors.soDt}
          />
          <UserControl.Input
            fullWidth
            id="matKhau"
            name="matKhau"
            label="Password"
            value={formik.values.matKhau}
            type="text"
            onChange={formik.handleChange}
            error={formik.touched.matKhau && Boolean(formik.errors.matKhau)}
            helperText={formik.touched.matKhau && formik.errors.matKhau}
          />
          <UserControl.Input
            fullWidth
            id="maLoaiNguoiDung"
            name="maLoaiNguoiDung"
            select
            label="Type Of User"
            value={formik.values.maLoaiNguoiDung}
            onChange={formik.handleChange}
            helperText={formik.touched.maLoaiNguoiDung && formik.errors.maLoaiNguoiDung}
            error={formik.touched.maLoaiNguoiDung && Boolean(formik.errors.maLoaiNguoiDung)}
          >
            {typeOfUser.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </UserControl.Input>

          <div>
            <UserControl.ActionButton color="primary"
              onClick={formik.handleReset}
            >Cancel</UserControl.ActionButton>
            <UserControl.ActionButton color="primary"
              type='submit'
            >Submit</UserControl.ActionButton>
          </div>
        </Grid> 
      </Grid>
    </form>)
}