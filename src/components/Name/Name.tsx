import { IoIosArrowDown } from "react-icons/io";
import classes from "./name.module.css";

const Name = () => (
  <div>
    <figure>
      <img src="/assets/my-avatar.png" alt="Al Imam" />
    </figure>

    <div>
      <h1 className="name" title="Al Imam">
        Al Imam
      </h1>

      <p>Web developer</p>
    </div>
  </div>
);

export default Name;
