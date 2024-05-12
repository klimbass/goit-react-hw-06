import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

import css from "./App.module.css";

function App() {
  return (
    <div className={css.appBox}>
      <div className={css.titleBox}>
        <h1 className={css.appTitle}>Phonebook</h1>
      </div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
