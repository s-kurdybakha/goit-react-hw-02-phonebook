import css from './contacts-list.module.css';

const ContactsList = ({ items, deleteContact }) => {
  const elements = items.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}
      <button onClick={() => deleteContact(id)} type="button">
        Delete
      </button>
    </li>
  ));
  return (
    <div className={css.wrapper}>
      <h2>Contacts</h2>
      <ul className={css.list}>{elements}</ul>
    </div>
  );
};

export default ContactsList;
