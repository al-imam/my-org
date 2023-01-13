import classes from "./contactItem.module.css";

interface ItemProps {
  icon: React.ReactNode;
  title: string;
  element: React.ReactNode;
}

const ContactItem: React.FunctionComponent<ItemProps> = ({
  element,
  icon,
  title,
}) => (
  <li className={classes.item}>
    {icon}
    <div className={classes.itemInfo}>
      <p>{title}</p>
      {element}
    </div>
  </li>
);

export default ContactItem;
