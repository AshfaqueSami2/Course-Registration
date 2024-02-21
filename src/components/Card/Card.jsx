const Card = ({ course }) => {
  return (
    <div>
      <div className="mx-auto card">
        <h1 className="course-name ml-6 mt-4">Course Name:</h1>

        <h1 className="">Total Price:{course}</h1>

        <div>
          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
