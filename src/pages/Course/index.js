import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCourseDetail } from "../../actions/courseDetail";
import { useParams } from "react-router-dom";
import { Button, ButtonRed } from "../../styles";

const CourseSection = styled.section`
  position: relative;
  .inner {
    max-width: 118.4rem;
    margin: 0 auto;
    @media screen and (max-width: 1200px) {
      max-width: 108rem;
    }
  }
`;

const Content = styled.div`
  max-width: 70rem;
  margin-left: 1rem;
  h3 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 1200px) {
    max-width: 60rem;
  }
  @media screen and (max-width: 1080px) {
    max-width: 85rem;
    margin: 0 3.2rem;
  }
  @media screen and (max-width: 700px) {
    margin: 0 2.4rem;
  }
`;
const Card = styled.div`
  display: block;
  position: absolute;
  top: 10%;
  right: 10%;
  border-bottom: 1px solid #dcdacb;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
  border-radius: 4px;
  background-color: #fff;
  @media screen and (max-width: 1080px) {
    display: none;
  }
  .img-content {
    width: 34rem;
    z-index: 1;
    border-radius: 4px;
    img {
      width: 100%;
      height: 20rem;
    }
  }
  .main-content {
    padding: 2.4rem;
    h2 {
      font-weight: 600;
      text-align: center;
      margin-bottom: 2rem;
    }
    button,
    a {
      width: 100%;
      margin: 1rem auto;
    }
  }
`;
const TopContainer = styled.div`
  padding: 3.2rem 0;
  background-color: #1e1e1c;
  color: #fff;
  h1 {
    font-size: 3.8rem;
    font-weight: 600;
    margin-bottom: 2.4rem;
  }
  p {
    padding: 1rem 0;
    font-size: 1.6rem;
  }
  .purchase {
    display: none;
  }
  @media screen and (max-width: 1080px) {
    .purchase {
      display: block;
      margin: 0;
      button,
      a {
        width: 80%;
        margin: 2rem auto;
      }
    }
  }
`;

const MobileScreen = styled.div`
  display: none;
  @media screen and (max-width: 1080px) {
    display: block;
    margin-bottom: 2rem;
  }
`;

const BottomContainer = styled.div`
  padding: 8rem 0;
  @media screen and (max-width: 1200px) {
    padding: 5rem 0;
  }
  p {
    font-size: 1.6rem;
    line-height: 1.34;
  }
`;

export default function Course() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const { courseDetail, isLoading, error } = useSelector(
    (state) => state.courseDetail
  );

  useEffect(() => {
    dispatch(getCourseDetail(courseId));
    console.log(courseId);
  }, [courseId]);
  // console.log(courseDetail);
  let result = [courseDetail].flat();
  // console.log(Array.isArray(result));
  console.log(result);

  return (
    <CourseSection>
      {result.map((item) => (
        <>
          <Card>
            <div className="img-content">
              <img src={item.hinhAnh} alt="" />
            </div>
            <div className="main-content">
              <h2>{item.tenKhoaHoc}</h2>
              <ButtonRed>Add to Cart</ButtonRed>
              <Button primary bd colorHover to="/">
                Buy now
              </Button>
            </div>
          </Card>
          <TopContainer>
            <MobileScreen>
              <img src={item.hinhAnh} alt="" />
            </MobileScreen>
            <div key={item.maKhoaHoc} className="inner ">
              <Content>
                <h1>{item.tenKhoaHoc}</h1>
                <p>View: {item.luotXem}</p>
                <p>
                  Last Updated: <time>{item.ngayTao}</time>
                </p>
                {/* {console.log([item.nguoiTao].flat())} */}
                {[item.nguoiTao].flat().map((name) => (
                  <p>Created by: {name.hoTen}</p>
                ))}
              </Content>
              <div className="purchase">
                <ButtonRed>Add to Cart</ButtonRed>
                <Button primary bd colorHover to="/">
                  Buy now
                </Button>
              </div>
            </div>
          </TopContainer>
          <BottomContainer>
            <div key={item.maKhoaHoc} className="inner ">
              <Content className="content">
                <h3>Course information:</h3>
                <p>{item.moTa}</p>

                {/* {Object.values(item.nguoiTao).map((name) => (
                <p>Created by: {name.hoTen}</p>
              ))} */}
              </Content>
            </div>
          </BottomContainer>
        </>
      ))}
    </CourseSection>
  );
}
