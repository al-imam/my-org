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
  <li>
    <div>{icon}</div>

    <div>
      <p>{title}</p>
      {element}
    </div>
  </li>
);

export default ContactItem;
