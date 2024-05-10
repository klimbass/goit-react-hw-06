import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

export default function ContactList({ base, delContact }) {
  return (
    <ul className={css.contactList}>
      {base.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact data={contact} delContact={delContact} />
          </li>
        );
      })}
    </ul>
  );
}
