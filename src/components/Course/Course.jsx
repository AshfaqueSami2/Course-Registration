import "./Course.css";
import { LuDollarSign } from "react-icons/lu";
import { FaBookOpen } from "react-icons/fa";
import { useState } from "react";

const Course = ({ course, handleCourses }) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const { id, title, image, description, price, credit_hours } = course;

  const handleClick = () => {
    handleCourses(course);
    setButtonClicked(true);
  };

  return (
    <div className="ml-4 mb-6 border-2  rounded-xl shadow-lg  ">
      <div className="flex justify-center	p-4">
        <img className="img rounded-xl" src={image} alt="" />
      </div>
      <div style={{ marginTop: "16px" }} className="text-center">
        <h3
          style={{ fontSize: "18px", fontWeight: "600" }}
          className="font-medium"
        >
          {title}
        </h3>
        <p
          style={{ marginTop: "12px", marginBottom: "19px" }}
          className="description"
        >
          {description}
        </p>
      </div>
      {/* parent div */}
      <div className="flex items-center justify-center m-5 space-x-10">
        <div className="flex  items-center">
          <div>
            <p className="w-6 ">
              <LuDollarSign></LuDollarSign>
            </p>
          </div>
          <div>
            <p style={{ fontSize: "16px" }}>Price : ${price}</p>
          </div>
        </div>
        <div className="flex  items-center">
          <div>
            <p className="w-6">
              <FaBookOpen></FaBookOpen>
            </p>
          </div>
          <div>
            <p style={{ fontSize: "16px" }}>Credit:{credit_hours}</p>
          </div>
        </div>
      </div>
      {/* button */}
      <div className={`flex mx-auto justify-center ${buttonClicked ? 'bg-green-100 border-green-500' : ''} w-10/12 mb-8 h-10 border-2 rounded-xl  select-btn `}>
        <button
          onClick={handleClick}
          className={`text-white `}
          style={{ color: buttonClicked ? "black" : "black" }}
          disabled={buttonClicked}
         
        >
          {buttonClicked ? "Selected" : "Select"}
        </button>
      </div>
    </div>
  );
};

export default Course;
