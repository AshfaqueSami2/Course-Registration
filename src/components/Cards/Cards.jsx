import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ courses }) => {
  let sum = 0;
  for (let i = 0; i < courses.length; i++) {
    sum += courses[i].price;
  }

  let sum1 = 0;
  for (let i = 0; i < courses.length; i++) {
    sum1 += courses[i].credit_hours;
    if (sum1 > 20) {
      sum1 = 20; // Cap sum1 at 20 if it exceeds
      break; // Exit the loop if the limit is exceeded
    }
  }

  let sum2 = 20;
  for (let i = 0; i < courses.length; i++) {
    sum2 -= courses[i].credit_hours;
  }

  return (
    <div
      className="mx-auto border-2  rounded-xl shadow-lg card"
      key={courses.id}
    >
      <div>
        {/* <h1>Added Course: {courses.length}</h1> */}
        <div className="text-center mt-6 credit">
          <h2>Credit Hour Remaining: {sum2}</h2>
          <p style={{width:'264px',margin:'auto'}} className="border-b-2"></p>
        </div>
        <h1 className="course-name ml-6 mt-4">Course Name:</h1>

        {courses.map((course, index) => (
          <div className="text-center">
            <p
              className="course-title"
              style={{ fontSize: "16px", lineHeight: "30px" }}
            >
              {" "}
              {index + 1}.{course.title}
            </p>
            
          </div>
          
        ))}

        <div
          className="gap-7"
          style={{ marginTop: "180px", marginLeft: "24px" }}
        >
          <p style={{width:'269px',margin:'auto'}} className="border-b-2"></p>
          <h2 style={{ fontSize: "16px", fontWeight: "600" }} className="mb-9">
            Total Credit Hour: {sum1}
          </h2>

          <h1 style={{ fontSize: "16px", fontWeight: "600" }}>
            Total Price: ${sum}
          </h1>
          {sum1 === 20 && <h2>{alert("Your Credit limit is over")}</h2>}
        </div>
      </div>
    </div>
  );
};

export default Cards;
