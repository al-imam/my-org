import { IoIosArrowDown } from "react-icons/io";
import classes from "./name.module.css";

const Name = () => (
  <div className={classes.name}>
    <div
      className={classes.img}
      style={{
        width: "5rem",
        height: "5rem",
        backgroundColor: "var(--gray-100)",
      }}
    ></div>

    <div className={classes.nameInfo}>
      <h1 className={classes.heading} title="Al Imam">
        Al Imam
      </h1>

      <p className={classes.subtitle}>Web developer</p>
    </div>
  </div>
);

export default Name;
