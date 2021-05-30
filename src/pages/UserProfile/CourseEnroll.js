import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonRed } from "src/styles";
import { cancelCourse } from "src/actions/enroll";

const Wrapper = styled.div`
  padding: 3rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dedfe0;
  input {
    display: none;
  }
`;

const Direct = styled(Link)`
  font-weight: 700;
  font-size: 2rem;
`;

const Title = styled.h2`
  padding: 2rem 0;
`;

export default function CourseEnroll() {
  const dispatch = useDispatch();
  const { account } = useSelector((state) => state.user);
  const { enroll } = useSelector((state) => state.enroll);

  console.log(enroll);
  let result = [account].flat();
  // console.log(result);

  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const userAccount = userInfo.taiKhoan;

  function handleCancel(values) {
    console.log(values);
    dispatch(cancelCourse(values));
    // alert("Cancel course successfully!");
  }

  return (
    <>
      <Title>Courses you're enrolled in</Title>
      {result.map((item) =>
        item.chiTietKhoaHocGhiDanh.map((enroll) => (
          <form onSubmit={handleCancel}>
            <Wrapper>
              <Direct to={`/course/${enroll.maKhoaHoc}`}>
                {enroll.tenKhoaHoc}
              </Direct>
              <input value={enroll.maKhoaHoc} />
              <input value={userAccount} />

              <ButtonRed type="submit" handleCancel>Cancel</ButtonRed>
            </Wrapper>
          </form>
        ))
      )}
    </>
  );
}
