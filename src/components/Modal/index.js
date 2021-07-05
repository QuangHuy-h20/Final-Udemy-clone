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
} from "@material-ui/core";
import { useTheme, withStyles } from "@material-ui/core/styles";
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
import CourseControl from "../CourseControl/CourseControl";
import { useFormik } from "formik";
import { getCourseDetail } from "src/actions/course";
import { useSelector } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal(props) {
  const { selectedCourse } = props;
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const { courseUpdate, error, categoryList } = useSelector(
    (state) => state.adminCourse
  );
  useEffect(() => {
    if (selectedCourse != null) {
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
      maKhoaHoc: selectedCourse ? selectedCourse.maKhoaHoc : "",
      biDanh: selectedCourse ? selectedCourse.biDanh : "",
      tenKhoaHoc: selectedCourse ? selectedCourse.matKhau : "",
      moTa: selectedCourse ? selectedCourse.hoTen : "",
      taiKhoanNguoiTao: selectedCourse ? selectedCourse.taiKhoanNguoiTao : taiKhoan,
      ngayTao: selectedCourse ? selectedCourse.ngayTao : new Date().toString(),
      maNhom: selectedCourse ? selectedCourse.maNhom : "GP08",
      luotXem: selectedCourse ? selectedCourse.luotXem : 0,
      danhGia: selectedCourse ? selectedCourse.danhGia : 0,
      maDanhMucKhoaHoc: selectedCourse ? selectedCourse.maDanhMucKhoaHoc : "",
    },
    validationSchema: Yup.object({
      maKhoaHoc: Yup.string().lowercase().required("This field is required."),
      biDanh: Yup.string().lowercase().required("This field is required."),
      tenKhoaHoc: Yup.string().required("This field is required."),
      moTa: Yup.string().required("This field is required."),
      maNhom: Yup.string().required("This field is required."),
      ngayTao: Yup.date().nullable(),
      taiKhoanNguoiTao: Yup.string().required("This field is required."),
      luotXem: Yup.number(),
      danhGia: Yup.number(),
      maDanhMucKhoaHoc: Yup.string(),
    }),
    onReset: () => {
      console.log("Formik reset !!!");
    },
    onSubmit: async (values) => {
      await addOrEditCourse(values);
    },
    onClose: () => {
      console.log("Formik closed !!!");
    },
  });

  const addOrEditCourse = async (values) => {
    if (!selectedCourse) {
      dispatch(addNewCourse(values));
    } else {
      dispatch(updateCourse(values));
    }
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    formik.handleReset();
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
        </DialogTitle>
        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
          <DialogContent dividers>
            <CourseControl.Input
              lable="Ma Khoa Hoc"
              id="maKhoaHoc"
              name="maKhoaHoc"
              type="text"
              value={formik.values.maKhoaHoc}
              onChange={formik.handleChange}
              helperText={formik.touched.maKhoaHoc && formik.errors.maKhoaHoc}
              error={
                formik.touched.maKhoaHoc && Boolean(formik.errors.maKhoaHoc)
              }
            />
            <CourseControl.Input
              lable="Bi Danh"
              id="biDanh"
              name="biDanh"
              value={formik.values.biDanh}
              onChange={formik.handleChange}
              helperText={formik.touched.biDanh && formik.errors.biDanh}
              error={formik.touched.biDanh && Boolean(formik.errors.biDanh)}
            />
            <CourseControl.Input
              lable="Ten Khoa Hoc"
              id="tenKhoaHoc"
              name="tenKhoaHoc"
              value={formik.values.tenKhoaHoc}
              onChange={formik.handleChange}
              helperText={formik.touched.tenKhoaHoc && formik.errors.tenKhoaHoc}
              error={
                formik.touched.tenKhoaHoc && Boolean(formik.errors.tenKhoaHoc)
              }
            />
            <CourseControl.Input
              lable="Mo Ta"
              id="moTa"
              name="moTa"
              value={formik.values.moTa}
              onChange={formik.handleChange}
              helperText={formik.touched.moTa && formik.errors.moTa}
              error={formik.touched.moTa && Boolean(formik.errors.moTa)}
            />
            <CourseControl.Input
              lable="Ma Nhom"
              id="maNhom"
              name="maNhom"
              value={formik.values.maNhom}
              onChange={formik.handleChange}
              helperText={formik.touched.maNhom && formik.errors.maNhom}
              error={formik.touched.maNhom && Boolean(formik.errors.maNhom)}
            />
            <CourseControl.Input
              lable="Luot Xem"
              id="luotXem"
              name="luotXem"
              value={formik.values.luotXem}
              onChange={formik.handleChange}
              helperText={formik.touched.luotXem && formik.errors.luotXem}
              error={formik.touched.luotXem && Boolean(formik.errors.luotXem)}
            />
            <CourseControl.Input
              lable="Danh Gia"
              id="danhGia"
              name="danhGia"
              value={formik.values.danhGia}
              onChange={formik.handleChange}
              helperText={formik.touched.danhGia && formik.errors.danhGia}
              error={formik.touched.danhGia && Boolean(formik.errors.danhGia)}
            />
            <CourseControl.Input
              lable="Tai Khoan Nguoi Tao"
              id="taiKhoanNguoiTao"
              name="taiKhoanNguoiTao"
              value={formik.values.taiKhoanNguoiTao}
              onChange={formik.handleChange}
              helperText={formik.touched.taiKhoanNguoiTao && formik.errors.taiKhoanNguoiTao}
              error={formik.touched.taiKhoanNguoiTao && Boolean(formik.errors.taiKhoanNguoiTao)}
            />
            <Box width="100%" mb={2}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  id="ngayTao"
                  label="Ngay Tao"
                  inputVariant="outlined"
                  value={formik.values.ngayTao}
                  onChange={formik.handleChange}
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
            <CourseControl.Input
              lable="Ma Danh Muc"
              id="maDanhMucKhoaHoc"
              name="maDanhMucKhoaHoc"
              select
              value={formik.values.maDanhMucKhoaHoc}
              onChange={formik.handleChange}
              helperText={formik.touched.maDanhMucKhoaHoc && formik.errors.maDanhMucKhoaHoc}
              error={
                formik.touched.maDanhMucKhoaHoc &&
                Boolean(formik.errors.maDanhMucKhoaHoc)
              }
            >
              {categoryList.map((option) => (
                <MenuItem
                  key={option.maDanhMucKhoaHoc}
                  value={option.maDanhMucKhoaHoc}
                >
                  {option.tenDanhMuc}
                </MenuItem>
              ))}
            </CourseControl.Input>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Disagree
            </Button>
            <ColorButton
              color="primary"
              type="submit"
              variant="outlined"
            >
              Agree
            </ColorButton>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
