import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { lazy, Suspense } from "react";

//Layouts
import AdminLayout from "./layouts/Admin";
import AppLayout from "./layouts/App";

//Custom Route
import AdminRoute from "./auth/AdminRoute";

//Pages w LazyLoad
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Courses = lazy(() => import("./pages/CoursesByCategory"));
const Course = lazy(() => import("./pages/Course"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const AdminCourses = lazy(() => import("./pages/AdminCourses"));
const AdminUsers = lazy(() => import("./pages/AdminUsers"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            <Route path="/admin">
              <AdminLayout>
                <Switch>
                  <Redirect exact from="/admin" to="/admin/courses"/>
                  <AdminRoute path="/admin/courses">
                    <AdminCourses/>
                  </AdminRoute>
                  <AdminRoute path="/admin/users">
                    <AdminUsers/>
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
                  <Route path="/signup">
                    <Register />
                  </Route>
                  <Route path="/user/profile">
                    <UserProfile />
                  </Route>
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
