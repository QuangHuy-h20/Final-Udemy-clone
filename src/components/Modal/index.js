import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  MenuItem,
  Slide,
  TextField,
} from "@material-ui/core";
import { useTheme, withStyles, makeStyles } from "@material-ui/core/styles";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { purple } from "@material-ui/core/colors";
import {
  addNewCourse,
  getAllCategories,
  updateCourse,
} from "src/actions/adminCourse";
import DateFnsUtils from "@date-io/date-fns";
import * as Yup from "yup";
import { useFormik } from "formik";
import { getCourseDetail } from "src/actions/course";
import { useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import UserControl from "../UserControl/UserControl";

const useStyles = makeStyles({
  inputText: {
    padding: 10,
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal(props) {
  const { selectedCourse } = props;

  const [open, setOpen] = React.useState(false);
  //const [openMenu, setOpenMenu] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  const dispatch = useDispatch();

  const { courseUpdate, error, categoryList } = useSelector(
    (state) => state.adminCourse
  );
  useEffect(() => {
    if (selectedCourse) {
      dispatch(getCourseDetail(selectedCourse.maKhoaHoc));
    }
    dispatch(getAllCategories());
  }, [selectedCourse]);

  const { taiKhoan } = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      "&:hover": {
        backgroundColor: purple[700],
      },
    },
  }))(Button);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maKhoaHoc: selectedCourse ? courseUpdate.maKhoaHoc : "",
      biDanh: selectedCourse ? courseUpdate.biDanh : "",
      tenKhoaHoc: selectedCourse ? courseUpdate.tenKhoaHoc : "",
      moTa: selectedCourse ? courseUpdate.moTa : "",
      taiKhoanNguoiTao: selectedCourse
        ? courseUpdate.taiKhoanNguoiTao
        : taiKhoan,
      ngayTao: selectedCourse ? courseUpdate.ngayTao : "",
      maNhom: selectedCourse ? courseUpdate.maNhom : "GP08",
      luotXem: selectedCourse ? courseUpdate.luotXem : 0,
      danhGia: selectedCourse ? courseUpdate.danhGia : 0,
      maDanhMucKhoaHoc: selectedCourse ? courseUpdate.maDanhMucKhoaHoc : "",
    },
    validationSchema: Yup.object({
      maKhoaHoc: Yup.string()
        .lowercase()
        .max(60, "Maximum 60 characters")
        .required("This field is required."),
      biDanh: Yup.string().lowercase().required("This field is required."),
      tenKhoaHoc: Yup.string().required("This field is required."),
      moTa: Yup.string().nullable(),
      taiKhoanNguoiTao: Yup.string()
        .required("This field is required.")
        .matches(
          /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]*$/,
          "Invalid characters"
        )
        .min(5, "Use from 5 to 20 characters for your account.")
        .max(20, "Use from 5 to 20 characters for your account."),
      ngayTao: Yup.date().nullable(),
      maNhom: Yup.string().required("This field is required."),
      luotXem: Yup.number(),
      danhGia: Yup.number(),
      maDanhMucKhoaHoc: Yup.string(),
    }),
    onReset: () => {
      console.log("Formik reset !!!");
    },
    onSubmit: async (values) => {
      try {
        if (!selectedCourse) {
          dispatch(addNewCourse(values));
        } else {
          dispatch(updateCourse(values));
        }
        setOpen(false);
      } catch (e) {
        console.log(e);
      }
    },
    onClose: () => {
      console.log("Formik closed !!!");
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    formik.handleReset();
    console.log(formik.getFieldProps())
  };

  return (
    <div>
      <ColorButton variant="outlined" color="primary" onClick={handleClickOpen}>
        Add new Course
      </ColorButton>

      <Dialog
        fullScreen={fullScreen}
        fullWidth
        maxWidth="sm"
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"ADD NEW COURSE"}
          <UserControl.ActionButton color="secondary" onClick={handleClose}>
            <CloseIcon />
          </UserControl.ActionButton>
        </DialogTitle>
          <DialogContent dividers>
            <TextField
              lable="Ma Khoa Hoc"
              id="maKhoaHoc"
              variant="outlined"
              name="maKhoaHoc"
              fullWidth
              className={classes.inputText}
              value={formik.values.maKhoaHoc}
              onChange={formik.handleChange}
              helperText={formik.touched.maKhoaHoc && formik.errors.maKhoaHoc}
              error={
                formik.touched.maKhoaHoc && Boolean(formik.errors.maKhoaHoc)
              }
            />
            <TextField
              lable="Bi Danh"
              id="biDanh"
              name="biDanh"
              variant="outlined"
              fullWidth
              className={classes.inputText}
              value={formik.values.biDanh}
              onChange={formik.handleChange}
              helperText={formik.touched.biDanh && formik.errors.biDanh}
              error={formik.touched.biDanh && Boolean(formik.errors.biDanh)}
            />
            <TextField
              lable="Ten Khoa Hoc"
              id="tenKhoaHoc"
              name="tenKhoaHoc"
              variant="outlined"
              fullWidth
              value={formik.values.tenKhoaHoc}
              className={classes.inputText}
              onChange={formik.handleChange}
              helperText={formik.touched.tenKhoaHoc && formik.errors.tenKhoaHoc}
              error={
                formik.touched.tenKhoaHoc && Boolean(formik.errors.tenKhoaHoc)
              }
            />
            <TextField
              lable="Mo Ta"
              id="moTa"
              name="moTa"
              variant="outlined"
              fullWidth
              className={classes.inputText}
              value={formik.values.moTa}
              onChange={formik.handleChange}
              helperText={formik.touched.moTa && formik.errors.moTa}
              error={formik.touched.moTa && Boolean(formik.errors.moTa)}
            />
            <TextField
              lable="Ma Nhom"
              id="maNhom"
              name="maNhom"
              variant="outlined"
              fullWidth
              className={classes.inputText}
              value={formik.values.maNhom}
              onChange={formik.handleChange}
              helperText={formik.touched.maNhom && formik.errors.maNhom}
              error={formik.touched.maNhom && Boolean(formik.errors.maNhom)}
            />
            <TextField
              lable="Luot Xem"
              id="luotXem"
              name="luotXem"
              variant="outlined"
              fullWidth
              className={classes.inputText}
              value={formik.values.luotXem}
              onChange={formik.handleChange}
              helperText={formik.touched.luotXem && formik.errors.luotXem}
              error={formik.touched.luotXem && Boolean(formik.errors.luotXem)}
            />
            <TextField
              lable="Danh Gia"
              id="danhGia"
              name="danhGia"
              variant="outlined"
              fullWidth
              className={classes.inputText}
              value={formik.values.danhGia}
              onChange={formik.handleChange}
              helperText={formik.touched.danhGia && formik.errors.danhGia}
              error={formik.touched.danhGia && Boolean(formik.errors.danhGia)}
            />
            <TextField
              lable="Tai Khoan Nguoi Tao"
              id="taiKhoanNguoiTao"
              name="taiKhoanNguoiTao"
              variant="outlined"
              fullWidth
              className={classes.inputText}
              value={formik.values.taiKhoanNguoiTao}
              onChange={formik.handleChange}
              helperText={
                formik.touched.taiKhoanNguoiTao &&
                formik.errors.taiKhoanNguoiTao
              }
              error={
                formik.touched.taiKhoanNguoiTao &&
                Boolean(formik.errors.taiKhoanNguoiTao)
              }
            />
            <Box width="100%" mb={2}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  id="ngayTao"
                  label="Ngay Tao"
                  name="ngayTao"
                  inputVariant="outlined"
                  value={formik.values.ngayTao}
                  className={classes.inputText}
                  onBlur={formik.handleBlur}
                  onChange={(name, value) => formik.handleChange("ngayTao",formik.values.ngayTao)}
                  error={
                    formik.touched.ngayTao && Boolean(formik.errors.ngayTao)
                  }
                  format="dd/MM/yyyy"
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </Box>
            <TextField
              lable="Ma Danh Muc"
              id="maDanhMuc"
              name="maDanhMuc"
              select
              variant="outlined"
              fullWidth
              className={classes.inputText}
              value={formik.values.maDanhMucKhoaHoc}
              onChange={formik.handleChange}
              helperText={
                formik.touched.maDanhMucKhoaHoc &&
                formik.errors.maDanhMucKhoaHoc
              }
              error={
                formik.touched.maDanhMucKhoaHoc &&
                Boolean(formik.errors.maDanhMucKhoaHoc)
              }
              defaultValue={formik.touched.maDanhMucKhoaHoc}
            >
              {categoryList.map((value) => (
                <MenuItem key={value.maDanhMuc} value={value.maDanhMuc}>
                  {value.tenDanhMuc}
                </MenuItem>
              ))}
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Disagree
            </Button>
            <ColorButton
              color="primary"
              type="submit"
              variant="outlined"
              onSubmit={formik.handleSubmit}
            >
              Agree
            </ColorButton>
          </DialogActions>
      </Dialog>
    </div>
  );
}
