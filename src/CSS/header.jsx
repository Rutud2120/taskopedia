function MainHeader() {
  return <h1 className="heading1">React Course</h1>; //here class is changes to classname
}

const Headerstyle = {
  color: "green",
  backgroundColor: "gray",
};

function SubHeader() {
  return <h3 style={Headerstyle}>You will enjoy this course</h3>;
}

function Header() {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
}

export default Header;
