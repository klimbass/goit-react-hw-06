import { IoSearch } from "react-icons/io5";
import { useId } from "react";

import css from "./SearchBox.module.css";

export default function SearchBox({ value, handleChange }) {
  const inputId = useId();
  return (
    <div className={css.searchBox}>
      <label htmlFor={inputId}>Find contacts by name</label>
      <input
        id={inputId}
        className={css.input}
        type="text"
        value={value}
        onChange={handleChange}
      ></input>
      <IoSearch className={css.searchIcon} size="20px" />
    </div>
  );
}
