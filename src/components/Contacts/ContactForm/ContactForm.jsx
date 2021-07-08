import React, { useState } from "react";
import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addNewContact } from "../../../redux/contacts/contactsOperations";
import { selectAllContacts } from "../../../redux/contacts/contactsSelectors";

const initialState = { name: "", number: "", };

const ContactForm = () => {
  const [state, setState] = useState(initialState);
  const items = useSelector(selectAllContacts);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name } = state;

    const isDuplicate = items.some((item) => item.name === name);
    if (isDuplicate) {
      alert("Такоe имя уже существует " + name);
      return;
    }

    dispatch(state => addNewContact({ ...state }));
  };


  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor={css.labelStyles}>Name</label>
        <input
          name="name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          value={state.name}
        />
        <label htmlFor={css.labelStyles}>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          value={state.number}
        />
        <button type="submit" className={css.btnStyle}>
          Add
        </button>
      </form>
    </>
  );
}

export default ContactForm;

  




