import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState, useEffect } from "react";

import css from "./App.module.css";

function App() {
  const [contactList, setContactList] = useState(() => {
    const savedContactList = window.localStorage.getItem("contactList");
    if (savedContactList !== null) {
      return JSON.parse(savedContactList);
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  useEffect(() => {
    window.localStorage.setItem(
      "contactList",
      JSON.stringify([...contactList])
    );
  }, [contactList]);

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const delContact = (id) => {
    setContactList(contactList.filter((item) => item.id !== id));
  };

  const contactListFiltered = contactList.filter((item) => {
    return item.name.toLowerCase().includes(searchValue.toLocaleLowerCase());
  });

  return (
    <div className={css.appBox}>
      <h1 className={css.appTitle}>Phonebook</h1>
      <ContactForm setContactList={setContactList} contactList={contactList} />
      <SearchBox value={searchValue} handleChange={handleChange} />
      <ContactList base={contactListFiltered} delContact={delContact} />
    </div>
  );
}

export default App;
