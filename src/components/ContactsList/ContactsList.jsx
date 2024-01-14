import css from './contacts-list.module.css';

const ContactsList = ({ items }) => {
  return (
    <div className={css.wrapper}>
      <h2>Contacts</h2>
      <ul className={css.list}>
        <li>My contact</li>
      </ul>
    </div>
  );
};

export default ContactsList;
