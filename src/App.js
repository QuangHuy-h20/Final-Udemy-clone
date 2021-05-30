import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { lazy, Suspense } from "react";

//Layouts
import AdminLayout from "./layouts/Admin";
import AppLayout from "./layouts/App";

//Custom Route
import AdminRoute from "./auth/AdminRoute";
import UserRoute from "./auth/UserRoute";

//UserLayout
import PublicProfile from "./pages/UserProfile/PublicProfile";
import EditProfile from "./pages/UserProfile/EditProfile";
import CourseEnroll from "./pages/UserProfile/CourseEnroll";

//Pages w LazyLoad
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Courses = lazy(() => import("./pages/CoursesByCategory"));
const Course = lazy(() => import("./pages/Course"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const AdminCourses = lazy(() => import("./pages/AdminCourses"));
const AdminUsers = lazy(() => import("./pages/AdminUsers"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets2.lottiefiles.com/packages/lf20_rIaq3s.json"
            style={{ width: "100vw", height: "100vh", background: "#000" }}
          ></lottie-player>
        }
      >
        <BrowserRouter>
          <Switch>
            <Route path="/admin">
              <AdminLayout>
                <Switch>
                  {/* <Redirect exact from="/admin" to="/admin/courses" /> */}
                  <AdminRoute path="/admin/courses">
                    <AdminCourses />
                  </AdminRoute>
                  <AdminRoute path="/admin/users">
                    <AdminUsers />
                  </AdminRoute>
                </Switch>
              </AdminLayout>
            </Route>
            <Route path="/">
              <AppLayout>
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/courses/:category">
                    <Courses />
                  </Route>
                  <Route path="/course/:courseId">
                    <Course />
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <UserRoute path="/signup">
                    <Register />
                  </UserRoute>
                  <Route path="/user">
                    <UserProfile>
                      <Switch>
                        <Redirect
                          exact
                          from="/user"
                          to="/user/public-profile"
                        />
                        <Route path="/user/public-profile">
                          <PublicProfile />
                        </Route>
                        <Route path="/user/edit-profile">
                          <EditProfile />
                        </Route>
                        <Route path="/user/course-enroll">
                          <CourseEnroll />
                        </Route>
                      </Switch>
                    </UserProfile>
                  </Route>
                  <Route path="" component={PageNotFound} />
                </Switch>
              </AppLayout>
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
