import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import css from "./Contact.module.css";

export default function Contact({ data, delContact }) {
  return (
    <div className={css.card}>
      <ul className={css.cardLis}>
        <li className={css.cardListItem}>
          <p className={css.cardText}>
            <FaUser className={css.icon} size="18px" />
            {data.name}
          </p>
        </li>

        <li className={css.cardListItem}>
          <p className={css.cardText}>
            <FaPhoneAlt className={css.icon} size="18px" />
            {data.number}
          </p>
        </li>
      </ul>
      <button className={css.cardBtn} onClick={() => delContact(data.id)}>
        Delete
      </button>
    </div>
  );
}
