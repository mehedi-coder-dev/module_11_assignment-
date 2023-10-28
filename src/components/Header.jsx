
import img from "../assets/img/logo.png";
const Header = () => {
  return (
    <div className="main_header">
      <div className="header">
        <ul>
          <li>
            <img src={img} alt="Logo" />
          </li>
          <li>
            <select>
              <option>Download</option>
              <option>Android</option>
              <option>IOS/Max</option>
              <option>Linux</option>
              <option>Windows</option>
            </select>
          </li>
          <li>notifications</li>
          <li>En</li>
          <li>
            <select>
              <option>All Courses</option>
              <option>Web and app development</option>
              <option>Product Design</option>
            </select>
          </li>
          <li>Dashboard</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
