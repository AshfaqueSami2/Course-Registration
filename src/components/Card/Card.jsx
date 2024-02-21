const Card = ({course}) => {
const {id,title} = course
  return (
    <div>
    <div className="card">
        <h1 className="credit text-center mb-4">Credit Hour Remaining 7 hr</h1>
        <hr className="break-line" />
        <div>
        <h1 className="course-name ml-6 mt-4">Course Name:</h1>
        <ul>
          {title}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
