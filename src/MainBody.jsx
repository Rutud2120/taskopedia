import Student from "./student";
import StudentReview from "./StudentReview";
export default function MainBody() {
  const whatWeWillLearn = "React";
  const totalLecture = 3;
  return (
    <div style={{ minHeight: "70vh" }}>
      <p>Total Lecture - {totalLecture}</p>
      <p>In this course, we will learn {whatWeWillLearn} using Taskopedia</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and class components</li>
      </ul>

      {/* <div>
          Enter task: <input maxLength={5} readOnly={true}></input>
        </div> */}
      <div className="row container">Students enrolled</div>
      <Student
        progExp={4}
        fullName="Rutuja Deshmukh"
        headShot="https://api.lorem.space/image/face?w=150&h=220"
      >
        <StudentReview />
      </Student>
      <Student
        progExp={3}
        fullName="Anishk Singh"
        headShot="https://api.lorem.space/image/face?w=150&h=150"
      >
        <StudentReview />
      </Student>
      <Student
        progExp={3.5}
        fullName="Anant Sinha"
        headShot="https://api.lorem.space/image/face?w=150&h=200"
      />
      <Student
        progExp={3.1}
        fullName="Survesh Mandhare"
        headShot="https://api.lorem.space/image/face?w=150&h=120"
      />
    </div>
  );
}
