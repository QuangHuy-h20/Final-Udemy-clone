import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesByCategory } from "../../actions/courses";
import { Card, ButtonRed, CoursesSection, StyledMain } from "../../styles";
import { Link } from "react-router-dom";

export default function Courses() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { courses, isLoading, error } = useSelector((state) => state.courses);

  useEffect(() => {
    //dispatch action call API get list
    dispatch(getCoursesByCategory(category));
    // console.log(category);
  }, [category]);

  return (
    <StyledMain>
      <CoursesSection>
        <div className="content">
          <div className="inner">
            {courses.map((item) => (
              <Card key={item.maKhoaHoc}>
                <Link to={`/course/${item.maKhoaHoc}`}>
                  <div className="card-img">
                    <img src={item.hinhAnh} alt="khoaHoc" />
                  </div>
                  <div className="card-content">
                    <h3>{item.tenKhoaHoc}</h3>
                    <p>{item.moTa}</p>
                    <ButtonRed>Add to cart</ButtonRed>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </CoursesSection>
    </StyledMain>
  );
}
