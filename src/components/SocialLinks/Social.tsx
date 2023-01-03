import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import classes from "./social.module.css";

export default () => (
  <ul>
    <li>
      <a href="#">
        <FaFacebookSquare />
      </a>
    </li>

    <li>
      <a href="#">
        <FaLinkedin />
      </a>
    </li>

    <li>
      <a href="#">
        <FaInstagram />
      </a>
    </li>
  </ul>
);
