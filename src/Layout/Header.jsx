import logo from "../Images/logo192.png";
function MainHeader() {
  return (
    <div className="pt-3 pl-2" style={{ backgroundColor: "black" }}>
      <img src={logo} style={{ height: "40px", verticalalign: "top" }} />
      <span className="h3 pt-4 text-white-50">React Course-Taskopedia</span>
      {/*here class is changes to classname*/}
    </div>
  );
}

const Headerstyle = {
  color: "green",
  backgroundColor: "gray",
};

function SubHeader() {
  return (
    <h3 style={Headerstyle} className="text-center">
      This will be an exciting course
    </h3>
  );
}

export default function Header() {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
}

//export default Header;
