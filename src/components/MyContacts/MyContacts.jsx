import { Component } from 'react';
import PhonebookForm from 'components/MyContacts/PhonebookForm/PhonebookForm';
import ContactsList from 'components/MyContacts/ContactsList/ContactsList';
import css from './my-contacts.module.css';
// import css from './my-contacts.module.css';
import { nanoid } from 'nanoid';

class MyContacts extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  isDublacate({ name, number }) {
    const normalazedName = name.toLowerCase();
    const normalazedNumber = number.toLowerCase();
    const { contacts } = this.state;

    const dublicate = contacts.find(item => {
      const normalazedCurrentName = item.name.toLowerCase();
      const normalazedCurrentNumber = item.number.toLowerCase();
      return (
        normalazedCurrentName === normalazedName &&
        normalazedCurrentNumber === normalazedNumber
      );
    });
    return Boolean(dublicate);
  }

  addContact = data => {
    const { name, number } = data;

    if (this.isDublacate(data)) {
      return alert(`${name} with number ${number} is already in contacts`);
    }

    this.setState(({ contacts }) => {
      const newContact = {
        id: nanoid(),
        ...data,
      };
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(item => item.id !== id);
      return {
        contacts: newContacts,
      };
    });
  };

  changeFilter = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;

    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLocaleLowerCase();

    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();
      const normalizedNumber = number.toLocaleLowerCase();
      return (
        normalizedName.includes(normalizedFilter) ||
        normalizedNumber.includes(normalizedFilter)
      );
    });
    return filteredContacts;
  };

  render() {
    const { addContact, deleteContact, changeFilter } = this;
    const contacts = this.getFilteredContacts();
    return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <PhonebookForm onSubmit={addContact} />
        <div className={css.listWrapper}>
          <h2>Contacts</h2>
          <input onChange={changeFilter} name="filter" placeholder="Search" />
          <ContactsList items={contacts} deleteContact={deleteContact} />
        </div>
      </div>
    );
  }
}

export default MyContacts;
