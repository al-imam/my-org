import ContactItem from "../ContactItem/ContactItem";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { TbCalendarTime } from "react-icons/tb";
import classes from "./contactList.module.css";

export default () => (
  <ul className={classes.items}>
    <ContactItem
      element={<a href="mailto:alimam01828@gmail.com">alimam01828@gmail.com</a>}
      title="Email"
      icon={<MdOutlineEmail />}
    />
    <ContactItem
      element={<a href="tel:+12133522795">+8801881614926</a>}
      title="Phone"
      icon={<IoPhonePortraitOutline />}
    />
    <ContactItem
      element={<time date-time="2002-03-18">March 18 2002</time>}
      title="Birthday"
      icon={<TbCalendarTime />}
    />
    <ContactItem
      element={<address>Noakhali Bangladesh</address>}
      title="Location"
      icon={<MdOutlineLocationOn />}
    />
  </ul>
);
