import ContactList from "../ContactList/ContactList";
import Social from "../SocialLinks/Social";
import classes from "./profile.module.css";
import Name from "../Name/Name";

const Profile = () => (
  <aside>
    <Name />
    <div>
      <hr />
      <ContactList />
      <hr />
      <Social />
    </div>
  </aside>
);

export default Profile;
