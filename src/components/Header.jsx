import img from "../assets/img/logo.png";

const Header = () => {
  const downloadArray = ["Download", "Android", "IOS/Max", "Linux", "Windows"];
  const allCourseArray = ["All Courses", "Web and app development", "Product Design"];
  const loginStatus = true;

  return (
    <div className="main_header">
      <div className="header">
        <ul>
          <li>
            <img src={img} alt="Logo" />
          </li>
          <li>
            <select>
              {downloadArray.map((ele, index) => {
                return <option key={index.toString()}>{ele}</option>;
              })}
            </select>
          </li>
          <li>notifications</li>
          <li>En</li>
          <li>
            <select>
              {allCourseArray.map((ele, index) => {
                return <option key={index.toString()}>{ele}</option>;
              })}
            </select>
          </li>
          <li>Dashboard</li>
          <li>{loginStatus === true ? <button className="logout">LogOut</button> : <button className="login">Login</button>}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
