import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

function App() {
  const [courses, setCourses] = useState([]);

  const handleCourses = (course) => {
    const newHandleCourses = [...courses, course];
    setCourses(newHandleCourses);
  };

  return (
    <>
      <Header></Header>
      <div className="flex">
        <Courses handleCourses={handleCourses}></Courses>
        <Cards courses={courses}></Cards>
      </div>
    </>
  );
}

export default App;
