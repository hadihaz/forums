import "./Navbar.css";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        {/* <Link to={"/Create"} className="brand">
          <h1>پست جدید</h1>
        </Link> */}
        <Searchbar />

        <ul className="pagesList">
          <li>
            <Link to={"/"} className="brand">
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link to={"/create"} className="brand">
              ایجاد پست
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="brand">
              درباره ما
            </Link>
          </li>{" "}
        </ul>
        <Link to={"/"} className="brand logo">
          <h1>انجمن علمی</h1>
        </Link>
      </nav>
    </div>
  );
}
