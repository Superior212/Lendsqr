import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Layout from "./Layouts/Layout";
import User from "./pages/User";
import Guarantors from "./pages/Guarantors";
import Loans from "./pages/Loans";
import UserProfile from "./pages/UserProfile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="user" element={<Layout />}>
          <Route path="home" element={<User />} />
          <Route path="profile" element={<UserProfile />} />

          {/* <Route path="" element={<Navigate to="/user/home" />} /> */}
          <Route path="guarantors" element={<Guarantors />} />
          <Route path="loans" element={<Loans />} />
          {/* courses  */}

          {/* <Route path="apply" element={<CoursesHome />} />
          <Route path="apply/:courseId" element={<CourseLayout />} />

          <Route path="Profile" element={<Profile />} />
          <Route path="Assessment" element={<Assessment />} />
          <Route path="Certification" element={<Certification />} />
          <Route path="Learning-Materials" element={<LearningMaterials />} />
          <Route path="Support" element={<Support />} />
          <Route path="Settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
