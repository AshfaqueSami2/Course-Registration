import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleCourses }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="sm:grid grid-cols-3 w-3/4  ">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          handleCourses={handleCourses}
        ></Course>
      ))}
    </div>
  );
};

export default Courses;
