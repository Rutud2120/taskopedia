export default function Student(props) {
  return (
    <div className="container p-1">
      <div className="row border">
        <div className="col-1">
          <img
            src={`https://ui-avatars.com/api/?name=${props.fullName}`}
            className="w-100 b"
          />
        </div>
        <div className="col-10">
          {props.fullName}
          <br />
          Coding Experience: {props.progExp} years
        </div>
      </div>
    </div>
  );
}
