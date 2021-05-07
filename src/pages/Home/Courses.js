import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../actions/courses";
import { Link } from "react-router-dom";

import { Card, ButtonCart, CoursesSection } from "../../styles";
export default function CoursesList() {
  const dispatch = useDispatch();
  const { courses, isLoading, error } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  return (
    <CoursesSection>
      <div className="inner">
        {courses.map((item, index) => (
          <Card key={item.maKhoaHoc}>
            <Link to={`/course/${item.maKhoaHoc}`}>
              <div className="card-img">
                <img src={item.hinhAnh} alt="khoaHoc" />
              </div>
              <div className="card-content">
                <h3>{item.tenKhoaHoc}</h3>
                <p>{item.moTa}</p>
                <ButtonCart>Add to cart</ButtonCart>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </CoursesSection>
  );
}
