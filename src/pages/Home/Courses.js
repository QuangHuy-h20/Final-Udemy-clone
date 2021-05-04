import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../actions/courses";
import styled from "styled-components";
import { Card, ButtonCart } from "../../styles";
export default function CoursesList() {
  const dispatch = useDispatch();
  const { courses, isLoading, error } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  const CoursesSection = styled.section`
    width: 100%;
    margin-bottom: 4.2rem;
    .inner {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 1.6rem;
      @media screen and (max-width: 980px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media screen and (max-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `;

  return (
    <CoursesSection>
      <div className="inner">
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
      </div>
    </CoursesSection>
  );
}
