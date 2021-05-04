import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesByCategory } from "../../actions/courses";
import { Card, ButtonCart } from "../../styles";

export default function Courses() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { courses, isLoading, error } = useSelector((state) => state.courses);

  useEffect(() => {
    //dispatch action call API get list
    dispatch(getCoursesByCategory(category));
  }, [category]);

  return (
    <>
       {courses.map((item, index) => (
          <Card key={item.maKhoaHoc}>
            <div className="card-img">
              <img src={item.hinhAnh} alt="khoaHoc" />
            </div>
            <div className="card-content">
              <h3>{item.tenKhoaHoc}</h3>
              <p>{item.moTa}</p>
              <ButtonCart>Add to cart</ButtonCart>
            </div>
          </Card>
        ))}
    </>
  );
}
