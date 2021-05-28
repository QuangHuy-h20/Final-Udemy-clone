import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function CourseEnroll() {
  const { account } = useSelector((state) => state.user);

  let result = [account].flat();
  useEffect(() => {
    console.log(result.chiTietKhoaHocGhiDanh);
  }, []);
  return (
    <div>
      {/* {courses.map((item) => (
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
            ))} */}
    </div>
  );
}
