export default function Student(props) {
  return (
    <div className="col-4 p-1">
      <div className="row border">
        <div className="col-1">
          {/* <img
            src={`https://ui-avatars.com/api/?name=${props.fullName}`}
            className="w-100 b"
          /> */}
          {/* <img src={faker.image.avatar()} className="w-100 b" /> */}
          {/* Using lorem.space */}
          <img src={props.headShot} className="w-100" />{" "}
        </div>
        <div className="col-8">
          {props.fullName}
          <br />
          Coding Experience: {props.progExp} years
        </div>
        <div className="col-2">{props.children}</div>
      </div>
    </div>
  );
}
