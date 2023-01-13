import { IoIosArrowDown } from "react-icons/io";
import classes from "./name.module.css";

const Name = () => (
  <div>
    <div
      style={{
        width: "5rem",
        height: "5rem",
        backgroundColor: "var(--gray-100)",
      }}
    ></div>

    <div>
      <h1 className="name" title="Al Imam">
        Al Imam
      </h1>

      <p>Web developer</p>
    </div>
  </div>
);

export default Name;
