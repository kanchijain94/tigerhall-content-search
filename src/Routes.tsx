import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const FrameThree = React.lazy(() => import("pages/FrameThree"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<FrameThree />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/framethree" element={<FrameThree />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
