import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { lazy, Suspense } from "react";
import AdminLayout from "./layouts/Admin";
import AdminRoute from "./auth/AdminRoute";
import AppLayout from "./layouts/App";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Courses from "./pages/CoursesByCategory";

function App() {
  return (
    <>
      <Suspense>
        <BrowserRouter>
          <Switch>
            <Route path="/admin">
              <AdminLayout>
                <Switch>
                  <Redirect exact from="/admin/courses" />
                  <AdminRoute path="/admin/courses"></AdminRoute>
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
                  <Route path="/courses/:courseId">
                    <Courses />
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/signup">
                    <Register />
                  </Route>
                  <Route path="/user">{/* <User /> */}</Route>
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
