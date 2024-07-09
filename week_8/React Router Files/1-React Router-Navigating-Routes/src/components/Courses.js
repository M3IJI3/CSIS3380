import React from 'react';

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><a to={`/courses/html`}>HTML</a></li>
        <li><a to={`/courses/css`}>CSS</a></li>
        <li><a to={`/courses/javascript`}>JavaScript</a></li>
      </ul>
    </div>
    
    {/* Write routes here to add links to submenues for html css jacascript... */}
  </div>
);

export default Courses;







