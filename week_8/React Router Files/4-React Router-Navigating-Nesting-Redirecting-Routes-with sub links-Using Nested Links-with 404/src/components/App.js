import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import HTML from './courses/HTML';
import CSS from './courses/CSS';
import JavaScript from './courses/JavaScript';

const App = () => (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About title="About" />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/courses" element={<Courses />}>
        {/* add the following so courses will redirect to html initially */}
        {/*index is used to set the default route */}
        {/* Navigate is used to make sure the root route is set to /courses/html */}
        {/*replace is prop passed to Navigate and is used to replace the current route in the history stack so the browswer back and forward doesn't get stuck */}
          <Route index element={<Navigate replace to="html" />} />
          <Route path="html" element={<HTML />} />
          <Route path="css" element={<CSS />} />
          <Route path="javascript" element={<JavaScript />} />
          {/* pay attention  to <Outlet /> in courses.js; it tells where nested routes shouold be put */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
);

export default App;
