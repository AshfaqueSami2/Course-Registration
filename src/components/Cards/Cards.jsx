import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ courses }) => {
  return (
    <div className="mx-auto">
      <h1>Added Course: {courses.length}</h1>

      

      {courses.map((course, idx) => (
        <Card key={idx} course={course}></Card>
      ))}
    </div>
  );
};

export default Cards;
